'use client';

import { cn } from '@/lib/utils';
import { Campaign } from '@/utils/types/temp';
import { ColumnDef } from '@tanstack/react-table';
import Image from 'next/image';

export const columns: ColumnDef<Campaign>[] = [
  {
    accessorKey: 'title',

    header: () => <div className="text-left">Title</div>,
    cell: ({ row }) => {
      const title = row.getValue('title') as string;
      const thumbnailUrl = row.original.thumbnailUrl as string;

      return (
        <div className="flex items-center gap-4">
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

    header: () => <div className="text-left">Current Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('currentAmount'));

      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(amount);

      return <div className="text-left font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: 'targetAmount',

    header: () => <div className="text-left">Target Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('targetAmount'));

      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(amount);

      return <div className="text-left font-medium">{formatted}</div>;
    },
  },

  {
    accessorKey: 'startDate',

    header: () => <div className="text-left">Published</div>,
    cell: ({ row }) => {
      const date = row.getValue('startDate') as Date;
      const formatted = date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      });

      return <div className="font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: 'status',

    header: () => <div className="text-left">Status</div>,
    cell: ({ row }) => {
      const status = row.getValue('status') as Campaign['status'];

      return (
        <div
          className={cn(
            'text-[13px] font-medium bg-opacity-35 w-max py-1.5 px-2.5 space-x-1.5 rounded-md',
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
];
