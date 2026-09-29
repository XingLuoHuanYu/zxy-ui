import type { Component } from 'vue'
import { InputOtp } from './components/InputOtp'
import { Modal } from './components/Modal'
import { Avatar } from './components/Avatar'
import { Badge } from './components/Badge'
import { Switch } from './components/Switch'
import { Drawer } from './components/Drawer'
import { Segmented } from './components/Segmented'
import { Slider } from './components/Slider'
import { Popover } from './components/Popover'
import { Tooltip } from './components/Tooltip'
import { Chip } from './components/Chip'
import { Alert } from './components/Alert'
import { Kbd } from './components/Kbd'
import { Button } from './components/Button'
import { Card } from './components/Card'
import { Divider } from './components/Divider'
import { Textarea } from './components/Textarea'
import { Checkbox, CheckboxGroup } from './components/Checkbox'
import { Input } from './components/Input'
import { Select } from './components/Select'
import { Rate } from './components/Rate'
import { Calendar } from './components/Calendar'
import { TimePicker } from './components/TimePicker'
import { DatePicker } from './components/DatePicker'
import { DateTimePicker } from './components/DateTimePicker'
import { TimeSelect } from './components/TimeSelect'
import { Skeleton, SkeletonText, SkeletonAvatar } from './components/Skeleton'
import { Tabs, TabItem } from './components/Tabs'
import { Panel } from './components/Panel'
import { Paginator } from './components/Paginator'
import { Progress } from './components/Progress'
import { Breadcrumb, BreadcrumbItem } from './components/Breadcrumb'
import { Splitter, SplitterPanel } from './components/Splitter'
import { RangeCalendar } from './components/RangeCalendar'
import { Accordion, AccordionItem } from './components/Accordion'
import { InputTag } from './components/InputTag'
import { Dropdown, DropdownItem, DropdownDivider } from './components/Dropdown'
import { Swap } from './components/Swap'
import { Image } from './components/Image'
import { Link } from './components/Link'
import { Carousel } from './components/Carousel'
import { Runhorselight } from './components/Runhorselight'
import { Timeline, TimelineItem } from './components/Timeline'
import { Toast, ToastContainer } from './components/Toast'
import { Steps, StepItem } from './components/Steps'
import { Radio, RadioGroup } from './components/Radio'
import { Table } from './components/Table'
// 引入样式
import './style/index.css'

// 全局注册名 → 组件 映射。
// 采用 `Z` 前缀的 PascalCase 注册名（如 ZButton），
// Vue 会自动将其解析为 kebab-case 标签（<z-button>）。
const components: Record<string, Component> = {
  ZInputOtp: InputOtp,
  ZModal: Modal,
  ZAvatar: Avatar,
  ZBadge: Badge,
  ZSwitch: Switch,
  ZDrawer: Drawer,
  ZSegmented: Segmented,
  ZSlider: Slider,
  ZPopover: Popover,
  ZTooltip: Tooltip,
  ZChip: Chip,
  ZAlert: Alert,
  ZKbd: Kbd,
  ZButton: Button,
  ZCard: Card,
  ZDivider: Divider,
  ZTextarea: Textarea,
  ZSelect: Select,
  ZCheckbox: Checkbox,
  ZCheckboxGroup: CheckboxGroup,
  ZInput: Input,
  ZRate: Rate,
  ZCalendar: Calendar,
  ZTimePicker: TimePicker,
  ZDatePicker: DatePicker,
  ZDateTimePicker: DateTimePicker,
  ZTimeSelect: TimeSelect,
  ZSkeleton: Skeleton,
  ZSkeletonText: SkeletonText,
  ZSkeletonAvatar: SkeletonAvatar,
  ZTabs: Tabs,
  ZTabItem: TabItem,
  ZPanel: Panel,
  ZPaginator: Paginator,
  ZProgress: Progress,
  ZBreadcrumb: Breadcrumb,
  ZBreadcrumbItem: BreadcrumbItem,
  ZSplitter: Splitter,
  ZSplitterPanel: SplitterPanel,
  ZRangeCalendar: RangeCalendar,
  ZAccordion: Accordion,
  ZAccordionItem: AccordionItem,
  ZInputTag: InputTag,
  ZDropdown: Dropdown,
  ZDropdownItem: DropdownItem,
  ZDropdownDivider: DropdownDivider,
  ZSwap: Swap,
  ZImage: Image,
  ZLink: Link,
  ZCarousel: Carousel,
  ZRunhorselight: Runhorselight,
  ZTimeline: Timeline,
  ZTimelineItem: TimelineItem,
  ZToastContainer: ToastContainer,
  ZSteps: Steps,
  ZStepItem: StepItem,
  ZRadio: Radio,
  ZRadioGroup: RadioGroup,
  ZTable: Table,
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
  InputOtp,
  Modal,
  Avatar,
  Badge,
  Switch,
  Drawer,
  Segmented,
  Slider,
  Popover,
  Tooltip,
  Chip,
  Alert,
  Kbd,
  Button,
  Card,
  Divider,
  Textarea,
  Select,
  Checkbox,
  CheckboxGroup,
  Input,
  Rate,
  Calendar,
  TimePicker,
  DatePicker,
  DateTimePicker,
  TimeSelect,
  Skeleton,
  SkeletonText,
  SkeletonAvatar,
  Tabs,
  TabItem,
  Panel,
  Paginator,
  Progress,
  Breadcrumb,
  BreadcrumbItem,
  Splitter,
  SplitterPanel,
  RangeCalendar,
  Accordion,
  AccordionItem,
  InputTag,
  Dropdown,
  DropdownItem,
  DropdownDivider,
  Swap,
  Image,
  Link,
  Carousel,
  Runhorselight,
  Timeline,
  TimelineItem,
  Toast,
  ToastContainer,
  Steps,
  StepItem,
  Radio,
  RadioGroup,
  Table,
}
