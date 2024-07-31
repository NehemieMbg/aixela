'use client';

import { cn } from '@/lib/utils';
import { Campaign } from '@/utils/types/temp';
import { ColumnDef } from '@tanstack/react-table';
import Image from 'next/image';

import { EllipsisVertical, MoreHorizontal } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export const columns: ColumnDef<Campaign>[] = [
  {
    accessorKey: 'title',

    header: () => <div className="text-left">Title</div>,
    cell: ({ row }) => {
      const title = row.getValue('title') as string;
      const thumbnailUrl = row.original.thumbnailUrl as string;

      return (
        <div className="flex items-center gap-4 w-full">
          <Image
            src={thumbnailUrl}
            alt={title}
            width={50}
            height={50}
            className="h-8 w-12 object-cover rounded-md"
          />
          <h3 className="text-left font-semibold">{title}</h3>
        </div>
      );
    },
  },
  {
    accessorKey: 'currentAmount',

    header: () => <div className="text-left max-xl:hidden">Current Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('currentAmount'));

      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(amount);

      return (
        <div className="text-left font-medium max-xl:hidden">{formatted}</div>
      );
    },
  },
  {
    accessorKey: 'targetAmount',

    header: () => <div className="text-left max-xl:hidden">Target Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('targetAmount'));

      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(amount);

      return (
        <div className="text-left font-medium max-xl:hidden">{formatted}</div>
      );
    },
  },

  {
    accessorKey: 'startDate',

    header: () => <div className="text-left max-xl:hidden">Published</div>,
    cell: ({ row }) => {
      const date = row.getValue('startDate') as Date;
      const formatted = date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      });

      return <div className="font-medium max-xl:hidden">{formatted}</div>;
    },
  },
  {
    accessorKey: 'status',

    header: () => <div className="text-left max-xl:hidden">Status</div>,
    cell: ({ row }) => {
      const status = row.getValue('status') as Campaign['status'];

      return (
        <div
          className={cn(
            'text-[13px] font-medium bg-opacity-35 w-max py-1.5 px-2.5 space-x-1.5 rounded-md max-xl:hidden',
            {
              'bg-orange-600 text-orange-700': status === 'on-going',
              'bg-green-600 text-green-700': status === 'completed',
              'bg-gray-600 text-gray-700': status === 'inactive',
            }
          )}
        >
          <div
            className={cn('inline-block size-2 rounded-full', {
              'bg-orange-700': status === 'on-going',
              'bg-green-700': status === 'completed',
              'bg-gray-700': status === 'inactive',
            })}
          ></div>
          <div className="inline-block capitalize">{status}</div>
        </div>
      );
    },
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const campaign = row.original;

      return (
        <div className="size-full flex justify-end">
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="">
              <Button
                variant="ghost"
                className="w-6 h-8 p-0 bg-inherit hover:bg-app-gray-250 focus:border-none"
              >
                <span className="sr-only">Open menu</span>
                <EllipsisVertical className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem
                onClick={() => {
                  if (campaign.status === 'inactive') {
                    // * fn to restore campaign
                    console.log('Restore campaign');
                  } else {
                    // * fn to archive campaign
                    console.log('Archive campaign');
                  }
                }}
              >
                {campaign.status !== 'inactive' ? 'Archive' : 'Restore'}
              </DropdownMenuItem>
              {/* <DropdownMenuSeparator /> */}
              <DropdownMenuItem
                onClick={() => {
                  // * fn to delete campaign
                  console.log('Delete campaign');
                }}
              >
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    },
  },
];
