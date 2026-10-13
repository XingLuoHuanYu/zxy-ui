import type { Component } from 'vue'
import { ZInputOtp } from './components/InputOtp'
import { ZModal } from './components/Modal'
import { ZAvatar } from './components/Avatar'
import { ZBadge } from './components/Badge'
import { ZSwitch } from './components/Switch'
import { ZDrawer } from './components/Drawer'
import { ZSegmented } from './components/Segmented'
import { ZSlider } from './components/Slider'
import { ZPopover } from './components/Popover'
import { ZTooltip } from './components/Tooltip'
import { ZChip } from './components/Chip'
import { ZAlert } from './components/Alert'
import { ZKbd } from './components/Kbd'
import { ZButton } from './components/Button'
import { ZCard } from './components/Card'
import { ZDivider } from './components/Divider'
import { ZTextarea } from './components/Textarea'
import { ZCheckbox, ZCheckboxGroup } from './components/Checkbox'
import { ZInput } from './components/Input'
import { ZSelect } from './components/Select'
import { ZRate } from './components/Rate'
import { ZCalendar } from './components/Calendar'
import { ZTimePicker } from './components/TimePicker'
import { ZDatePicker } from './components/DatePicker'
import { ZDateTimePicker } from './components/DateTimePicker'
import { ZTimeSelect } from './components/TimeSelect'
import { ZSkeleton, ZSkeletonText, ZSkeletonAvatar } from './components/Skeleton'
import { ZTabs, ZTabItem } from './components/Tabs'
import { ZPanel } from './components/Panel'
import { ZPaginator } from './components/Paginator'
import { ZProgress } from './components/Progress'
import { ZBreadcrumb, ZBreadcrumbItem } from './components/Breadcrumb'
import { ZSplitter, ZSplitterPanel } from './components/Splitter'
import { ZRangeCalendar } from './components/RangeCalendar'
import { ZAccordion, ZAccordionItem } from './components/Accordion'
import { ZInputTag } from './components/InputTag'
import { ZDropdown, ZDropdownItem, ZDropdownDivider } from './components/Dropdown'
import { ZSwap } from './components/Swap'
import { ZImage } from './components/Image'
import { ZLink } from './components/Link'
import { ZCarousel } from './components/Carousel'
import { ZRunhorselight } from './components/Runhorselight'
import { ZTimeline, ZTimelineItem } from './components/Timeline'
import { Toast, ZToastContainer } from './components/Toast'
import { ZSteps, ZStepItem } from './components/Steps'
import { ZRadio, ZRadioGroup } from './components/Radio'
import { ZTable } from './components/Table'
import { ZProTable } from './components/ProTable'
// 引入样式
import './style/index.css'

// 全局注册名 → 组件 映射。
// 采用 `Z` 前缀的 PascalCase 注册名（如 ZButton），
// Vue 会自动将其解析为 kebab-case 标签（<z-button>）。
const components: Record<string, Component> = {
  ZInputOtp: ZInputOtp,
  ZModal: ZModal,
  ZAvatar: ZAvatar,
  ZBadge: ZBadge,
  ZSwitch: ZSwitch,
  ZDrawer: ZDrawer,
  ZSegmented: ZSegmented,
  ZSlider: ZSlider,
  ZPopover: ZPopover,
  ZTooltip: ZTooltip,
  ZChip: ZChip,
  ZAlert: ZAlert,
  ZKbd: ZKbd,
  ZButton: ZButton,
  ZCard: ZCard,
  ZDivider: ZDivider,
  ZTextarea: ZTextarea,
  ZSelect: ZSelect,
  ZCheckbox: ZCheckbox,
  ZCheckboxGroup: ZCheckboxGroup,
  ZInput: ZInput,
  ZRate: ZRate,
  ZCalendar: ZCalendar,
  ZTimePicker: ZTimePicker,
  ZDatePicker: ZDatePicker,
  ZDateTimePicker: ZDateTimePicker,
  ZTimeSelect: ZTimeSelect,
  ZSkeleton: ZSkeleton,
  ZSkeletonText: ZSkeletonText,
  ZSkeletonAvatar: ZSkeletonAvatar,
  ZTabs: ZTabs,
  ZTabItem: ZTabItem,
  ZPanel: ZPanel,
  ZPaginator: ZPaginator,
  ZProgress: ZProgress,
  ZBreadcrumb: ZBreadcrumb,
  ZBreadcrumbItem: ZBreadcrumbItem,
  ZSplitter: ZSplitter,
  ZSplitterPanel: ZSplitterPanel,
  ZRangeCalendar: ZRangeCalendar,
  ZAccordion: ZAccordion,
  ZAccordionItem: ZAccordionItem,
  ZInputTag: ZInputTag,
  ZDropdown: ZDropdown,
  ZDropdownItem: ZDropdownItem,
  ZDropdownDivider: ZDropdownDivider,
  ZSwap: ZSwap,
  ZImage: ZImage,
  ZLink: ZLink,
  ZCarousel: ZCarousel,
  ZRunhorselight: ZRunhorselight,
  ZTimeline: ZTimeline,
  ZTimelineItem: ZTimelineItem,
  ZToastContainer: ZToastContainer,
  ZSteps: ZSteps,
  ZStepItem: ZStepItem,
  ZRadio: ZRadio,
  ZRadioGroup: ZRadioGroup,
  ZTable: ZTable,
  ZProTable: ZProTable,
}

const ZxyUI = {
  install: (app: any) => {
    for (const [name, comp] of Object.entries(components)) {
      app.component(name, comp)
    }
  },
}

export { ZxyUI }

export {
  ZInputOtp,
  ZModal,
  ZAvatar,
  ZBadge,
  ZSwitch,
  ZDrawer,
  ZSegmented,
  ZSlider,
  ZPopover,
  ZTooltip,
  ZChip,
  ZAlert,
  ZKbd,
  ZButton,
  ZCard,
  ZDivider,
  ZTextarea,
  ZSelect,
  ZCheckbox,
  ZCheckboxGroup,
  ZInput,
  ZRate,
  ZCalendar,
  ZTimePicker,
  ZDatePicker,
  ZDateTimePicker,
  ZTimeSelect,
  ZSkeleton,
  ZSkeletonText,
  ZSkeletonAvatar,
  ZTabs,
  ZTabItem,
  ZPanel,
  ZPaginator,
  ZProgress,
  ZBreadcrumb,
  ZBreadcrumbItem,
  ZSplitter,
  ZSplitterPanel,
  ZRangeCalendar,
  ZAccordion,
  ZAccordionItem,
  ZInputTag,
  ZDropdown,
  ZDropdownItem,
  ZDropdownDivider,
  ZSwap,
  ZImage,
  ZLink,
  ZCarousel,
  ZRunhorselight,
  ZTimeline,
  ZTimelineItem,
  Toast,
  ZToastContainer,
  ZSteps,
  ZStepItem,
  ZRadio,
  ZRadioGroup,
  ZTable,
  ZProTable,
}
