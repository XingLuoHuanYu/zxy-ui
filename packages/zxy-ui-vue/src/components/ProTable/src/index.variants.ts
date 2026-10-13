import { tv } from 'tailwind-variants'

export const proTableVariants = tv({
  slots: {
    root: 'w-full overflow-hidden rounded-lg bg-white shadow-sm dark:bg-gray-900',
    search:
      'mb-4 flex flex-wrap items-center gap-x-4 gap-y-3 rounded-lg bg-white px-4 py-3 shadow-sm dark:bg-gray-900',
    searchLabel: 'whitespace-nowrap text-sm text-gray-600 dark:text-gray-300',
    toolbar:
      'mt-3 flex w-full flex-wrap items-center justify-end gap-2 border-t border-gray-100 pt-3 dark:border-gray-800',
    table: 'w-full text-left text-sm',
    thead:
      'bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-800 dark:text-gray-400',
    th: 'px-6 py-3 font-medium',
    tbody: 'divide-y divide-gray-200 dark:divide-gray-700',
    tr: 'bg-white transition-colors hover:bg-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800',
    td: 'whitespace-nowrap px-6 py-4 text-gray-900 dark:text-gray-100',
    empty:
      'flex flex-col items-center justify-center py-12 text-gray-500 dark:text-gray-400',
    footer:
      'mt-4 flex flex-wrap items-center justify-between gap-3 rounded-b-lg border-t border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-600 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-300',
    pageButton:
      'rounded-lg border border-gray-200 bg-white px-3 py-1 text-sm text-gray-700 transition hover:border-blue-500 hover:text-blue-600 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:text-blue-400',
    pageButtonActive:
      'rounded-lg border border-blue-500 bg-blue-500 px-3 py-1 text-sm text-white',
    checkbox:
      'h-4 w-4 cursor-pointer rounded border-gray-300 text-blue-600 focus:ring-blue-500 dark:border-gray-600',
  },
  variants: {
    stripe: {
      true: {
        tr: 'even:bg-gray-50 dark:even:bg-gray-800',
      },
    },
    border: {
      true: {
        root: 'border border-gray-200 dark:border-gray-700',
        th: 'border-b border-gray-200 dark:border-gray-700',
        td: 'border-b border-gray-200 dark:border-gray-700',
      },
    },
    dense: {
      true: {
        th: 'px-4 py-2',
        td: 'px-4 py-2',
      },
    },
  },
  defaultVariants: {
    stripe: false,
    border: false,
    dense: false,
  },
})
