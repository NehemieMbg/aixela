import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { S3 } from 'aws-sdk';
import { ManagedUpload } from 'aws-sdk/lib/s3/managed_upload';
import { v4 as uuidv4 } from 'uuid';
import { Buffer } from 'buffer';
import SendData = ManagedUpload.SendData;

@Injectable()
export class UploadsService {
  private readonly s3Client: S3;

  /**
   * Constructs an instance of UploadsService.
   * @param configService - The service to access application configuration.
   */
  constructor(private readonly configService: ConfigService) {
    this.s3Client = new S3({
      region: this.configService.get('AWS_S3_BUCKET_REGION'),
      credentials: {
        accessKeyId: this.configService.get('AWS_S3_AWS_ACCESS_KEY_ID'),
        secretAccessKey: this.configService.get('AWS_SECRET_ACCESS_KEY'),
      },
    });
  }

  /**
   * Uploads a file to the S3 bucket.
   * @param fileName - The name of the file to be uploaded.
   * @param file - The file data as a Buffer.
   * @returns A promise that resolves to the upload result.
   * @throws An error if the upload fails.
   */
  async uploadFile(fileName: string, file: Buffer): Promise<SendData> {
    try {
      const uniqueKey: string = `${uuidv4()}-${fileName.replace(/ /g, '_').toLowerCase()}`;

      return await this.s3Client
        .upload({
          Bucket: this.configService.get('AWS_S3_BUCKET_NAME'),
          Key: uniqueKey,
          Body: file,
        })
        .promise();
    } catch (error) {
      throw new Error(`Failed to upload file: ${error.message}`);
    }
  }

  /**
   * Deletes a file from the S3 bucket.
   * @param key - The key of the file to be deleted.
   * @returns A promise that resolves when the file is deleted.
   * @throws An error if the deletion fails.
   */
  async deleteFile(key: string): Promise<void> {
    try {
      await this.s3Client
        .deleteObject({
          Bucket: this.configService.get('AWS_S3_BUCKET_NAME'),
          Key: key,
        })
        .promise();
    } catch (error) {
      throw new Error(`Failed to delete file: ${error.message}`);
    }
  }
}
