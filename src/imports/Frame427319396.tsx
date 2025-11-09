import svgPaths from "./svg-btcyvpg9mj";

function Title() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-[859px]" data-name="title">
      <p className="basis-0 font-['Open_Sans:SemiBold',_sans-serif] font-semibold grow leading-[1.25] min-h-px min-w-px relative shrink-0 text-[#10101b] text-[20px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        +96271234567 | Auto-replies
      </p>
    </div>
  );
}

function PageTitle() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="page title">
      <Title />
    </div>
  );
}

function Content() {
  return (
    <div className="box-border content-stretch flex gap-[2px] h-[22px] items-center justify-end overflow-clip p-[2px] relative shrink-0 w-[44px]" data-name="Content">
      <div className="bg-white rounded-[16px] shadow-[0px_2px_4px_0px_rgba(0,35,11,0.2)] shrink-0 size-[18px]" data-name="Handle BG" />
    </div>
  );
}

function SwitchBasic() {
  return (
    <div className="bg-[#1677ff] content-stretch flex gap-[2px] h-[22px] items-center justify-end min-w-[44px] relative rounded-[16px] shrink-0" data-name="Switch / Basic">
      <Content />
    </div>
  );
}

function LabelWrapper() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Label Wrapper">
      <div className="leading-[0] relative shrink-0 text-[0px] text-[rgba(0,0,0,0.88)] text-nowrap whitespace-pre">
        <p className="font-['SF_Pro:Semibold',_sans-serif] font-[590] leading-[22px] mb-0 text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Enable auto-replies
        </p>
        <p className="font-['SF_Pro:Regular',_sans-serif] font-normal leading-[22px] text-[14px]">
          <span style={{ fontVariationSettings: "'wdth' 100" }}>When enabled, customers will receive an automatic r</span>
          <span style={{ fontVariationSettings: "'wdth' 100" }}>eply</span>
          <span style={{ fontVariationSettings: "'wdth' 100" }}>{` message.`}</span>
        </p>
      </div>
    </div>
  );
}

function FormFormFormLabelHorizontal() {
  return (
    <div className="basis-0 content-stretch flex grow h-[40px] items-center min-h-px min-w-px relative shrink-0" data-name="Form / _Form / Form Label Horizontal">
      <LabelWrapper />
    </div>
  );
}

function Space() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Space">
      <SwitchBasic />
      <FormFormFormLabelHorizontal />
    </div>
  );
}

function SwitchWrapper() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="switch wrapper">
      <Space />
    </div>
  );
}

function MainSettings() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="main settings">
      <SwitchWrapper />
    </div>
  );
}

function Title1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Title">
      <div className="basis-0 flex flex-col font-['SF_Pro_Text:Medium',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[20px] text-[rgba(0,0,0,0.88)] text-nowrap">
        <p className="[white-space-collapse:collapse] leading-[28px] overflow-ellipsis overflow-hidden">Working Hours</p>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Text">
      <div className="flex flex-col font-['Roboto:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.65)] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[22px] whitespace-pre">Choose your working hours to determine when auto-replies are sent.</p>
      </div>
    </div>
  );
}

function Subtitle() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="subtitle">
      <Text />
    </div>
  );
}

function SearchAndFilter() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative self-stretch shrink-0" data-name="search and filter">
      <Title1 />
      <Subtitle />
    </div>
  );
}

function ContentWrapper() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="Content Wrapper">
      <SearchAndFilter />
    </div>
  );
}

function PageHeader() {
  return (
    <div className="content-stretch flex h-[50px] items-start justify-between relative shrink-0 w-full" data-name="Page Header">
      <ContentWrapper />
    </div>
  );
}

function PageHeader1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Page Header">
      <PageHeader />
    </div>
  );
}

function RadioButton() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Radio Button">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Radio Button">
          <circle cx="8" cy="8" fill="var(--fill-0, white)" id="Plate" r="7.5" stroke="var(--stroke-0, #D9D9D9)" />
        </g>
      </svg>
    </div>
  );
}

function Radio() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Radio">
      <RadioButton />
      <p className="font-['SF_Pro:Regular',_sans-serif] font-normal leading-[22px] relative shrink-0 text-[0px] text-[14px] text-[rgba(0,0,0,0.88)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="font-['SF_Pro:Bold',_sans-serif] font-bold" style={{ fontVariationSettings: "'wdth' 100" }}>
          Use account working hours
        </span>
        <span style={{ fontVariationSettings: "'wdth' 100" }}>
          <br aria-hidden="true" />
        </span>
        <span className="font-['SF_Pro_Text:Regular',_sans-serif] not-italic">Select this option if you want the automatic message to be sent based on the current account working hours.</span>
      </p>
    </div>
  );
}

function RadioButton1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Radio Button">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Radio Button">
          <circle cx="8" cy="8" fill="var(--fill-0, white)" id="Plate" r="7.5" stroke="var(--stroke-0, #1677FF)" />
          <circle cx="8" cy="8" fill="var(--fill-0, #1677FF)" id="Ellipse" r="4" />
        </g>
      </svg>
    </div>
  );
}

function Radio1() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Radio">
      <RadioButton1 />
      <div className="font-['SF_Pro:Regular',_sans-serif] font-normal leading-[22px] relative shrink-0 text-[0px] text-[14px] text-[rgba(0,0,0,0.88)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="font-['SF_Pro:Bold',_sans-serif] font-bold mb-0" style={{ fontVariationSettings: "'wdth' 100" }}>{`Custom working hours  `}</p>
        <p className="font-['SF_Pro_Text:Regular',_sans-serif] not-italic">Select this option if you only want the automatic message to be sent based on a specific working hours.</p>
      </div>
    </div>
  );
}

function IconQuestionCircleOutlined() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon / QuestionCircleOutlined">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon / QuestionCircleOutlined">
          <g id="Vector">
            <path d={svgPaths.p929f780} fill="black" fillOpacity="0.45" />
            <path d={svgPaths.p26d44d80} fill="black" fillOpacity="0.45" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function FormFormLabelVertical() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Form / Form Label Vertical">
      <p className="font-['SF_Pro_Text:Regular',_sans-serif] leading-[22px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.88)] text-nowrap whitespace-pre">Time zone</p>
      <IconQuestionCircleOutlined />
    </div>
  );
}

function IconDownOutlined() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon / DownOutlined">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon / DownOutlined">
          <path d={svgPaths.p1d223800} fill="var(--fill-0, black)" fillOpacity="0.25" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SelectSelectInput() {
  return (
    <div className="bg-white h-[32px] relative rounded-[6px] shrink-0 w-full" data-name="Select / Select Input">
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[32px] items-center px-[12px] py-0 relative w-full">
          <div className="basis-0 flex flex-col font-['SF_Pro_Text:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-[rgba(0,0,0,0.88)] text-nowrap">
            <p className="[white-space-collapse:collapse] leading-[22px] overflow-ellipsis overflow-hidden">(GMT +4:00) Abu Dhabi, Muscat, Baku, Tbilisi</p>
          </div>
          <IconDownOutlined />
        </div>
      </div>
    </div>
  );
}

function SelectAndCreate() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[4px] items-start pb-[24px] pt-0 px-0 relative shrink-0 w-[390px]" data-name="select and create">
      <SelectSelectInput />
    </div>
  );
}

function InputField() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Input field">
      <FormFormLabelVertical />
      <SelectAndCreate />
    </div>
  );
}

function CheckboxActiveDefault() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Checkbox/Active/Default">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Checkbox/Active/Default">
          <path d={svgPaths.p1d1d6d00} fill="var(--fill-0, #1677FF)" id="Plate" />
          <path d={svgPaths.p1da8a080} fill="var(--fill-0, white)" id="check" stroke="var(--stroke-0, white)" strokeWidth="0.3" />
        </g>
      </svg>
    </div>
  );
}

function CheckboxWrapper() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-start px-0 py-[3px] relative shrink-0" data-name="Checkbox Wrapper">
      <CheckboxActiveDefault />
    </div>
  );
}

function Checkbox() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[56px]" data-name="Checkbox">
      <CheckboxWrapper />
      <p className="font-['SF_Pro_Text:Regular',_sans-serif] leading-[22px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.88)] text-nowrap whitespace-pre">Sun</p>
    </div>
  );
}

function Placeholder() {
  return (
    <div className="basis-0 box-border content-stretch flex gap-[4px] grow items-center min-h-px min-w-px overflow-clip px-0 py-px relative shrink-0" data-name="placeholder">
      <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.88)] text-nowrap tracking-[-0.28px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        09:00
      </p>
    </div>
  );
}

function IconSwapRight() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="icon/SwapRight">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icon/SwapRight">
          <path d={svgPaths.p12c4a680} fill="var(--fill-0, black)" fillOpacity="0.45" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function InputSeperatorPickerSeparator() {
  return (
    <div className="box-border content-stretch flex gap-[10px] h-full items-center justify-center opacity-[0.87] px-[8px] py-px relative shrink-0 w-[32px]" data-name="input-seperator/picker-separator">
      <IconSwapRight />
    </div>
  );
}

function Placeholder1() {
  return (
    <div className="basis-0 box-border content-stretch flex gap-[4px] grow items-start min-h-px min-w-px overflow-clip px-0 py-px relative shrink-0" data-name="placeholder">
      <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.88)] text-nowrap tracking-[-0.28px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        08:00
      </p>
    </div>
  );
}

function Spacer() {
  return (
    <div className="content-stretch flex h-full items-center justify-between relative shrink-0 w-[8px]" data-name="spacer">
      <div className="shrink-0 size-[8px]" data-name="_spacer" />
    </div>
  );
}

function ComponentsInputAffix() {
  return (
    <div className="h-full relative shrink-0 w-[14px]" data-name="components/input-affix">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 23">
        <g clipPath="url(#clip0_55_31655)" id="components/input-affix">
          <path d={svgPaths.p2d20d500} fill="var(--fill-0, black)" fillOpacity="0.45" id="Union" />
        </g>
        <defs>
          <clipPath id="clip0_55_31655">
            <rect fill="white" height="23" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function TimePicker() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="time-picker">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-center px-[12px] py-[4px] relative w-full">
          <Placeholder />
          <div className="flex flex-row items-center self-stretch">
            <InputSeperatorPickerSeparator />
          </div>
          <Placeholder1 />
          <div className="flex flex-row items-center self-stretch">
            <Spacer />
          </div>
          <div className="flex flex-row items-center self-stretch">
            <ComponentsInputAffix />
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center justify-center relative shrink-0" data-name="Content">
      <p className="font-['SF_Pro_Text:Regular',_sans-serif] leading-[22px] not-italic relative shrink-0 text-[#1677ff] text-[14px] text-nowrap whitespace-pre">Copy to all</p>
    </div>
  );
}

function Button() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[8px] items-center justify-center px-[16px] py-0 relative rounded-[6px] shrink-0" data-name="Button">
      <Content1 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <TimePicker />
      <Button />
    </div>
  );
}

function InputInputCaption() {
  return (
    <div className="box-border content-stretch flex items-start pb-0 pt-[2px] px-0 relative shrink-0 w-full" data-name="Input / Input Caption">
      <p className="basis-0 font-['SF_Pro_Text:Regular',_sans-serif] grow leading-[22px] min-h-px min-w-px not-italic relative shrink-0 text-[#ff4d4f] text-[14px]">Start time cannot be later than the end time</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px relative shrink-0">
      <Frame10 />
      <InputInputCaption />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[16px] h-[55px] items-start relative shrink-0 w-[390px]">
      <Checkbox />
      <Frame9 />
    </div>
  );
}

function CheckboxActiveDefault1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Checkbox/Active/Default">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Checkbox/Active/Default">
          <path d={svgPaths.p1d1d6d00} fill="var(--fill-0, #1677FF)" id="Plate" />
          <path d={svgPaths.p1da8a080} fill="var(--fill-0, white)" id="check" stroke="var(--stroke-0, white)" strokeWidth="0.3" />
        </g>
      </svg>
    </div>
  );
}

function CheckboxWrapper1() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-start px-0 py-[3px] relative shrink-0" data-name="Checkbox Wrapper">
      <CheckboxActiveDefault1 />
    </div>
  );
}

function Checkbox1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[56px]" data-name="Checkbox">
      <CheckboxWrapper1 />
      <p className="font-['SF_Pro_Text:Regular',_sans-serif] leading-[22px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.88)] text-nowrap whitespace-pre">Mon</p>
    </div>
  );
}

function Placeholder2() {
  return (
    <div className="basis-0 box-border content-stretch flex gap-[4px] grow items-center min-h-px min-w-px overflow-clip px-0 py-px relative shrink-0" data-name="placeholder">
      <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.45)] text-nowrap tracking-[-0.28px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>{`From `}</p>
    </div>
  );
}

function IconSwapRight1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="icon/SwapRight">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icon/SwapRight">
          <path d={svgPaths.p12c4a680} fill="var(--fill-0, black)" fillOpacity="0.45" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function InputSeperatorPickerSeparator1() {
  return (
    <div className="box-border content-stretch flex gap-[10px] h-full items-center justify-center opacity-[0.87] px-[8px] py-px relative shrink-0 w-[32px]" data-name="input-seperator/picker-separator">
      <IconSwapRight1 />
    </div>
  );
}

function Placeholder3() {
  return (
    <div className="basis-0 box-border content-stretch flex gap-[4px] grow items-start min-h-px min-w-px overflow-clip px-0 py-px relative shrink-0" data-name="placeholder">
      <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.45)] text-nowrap tracking-[-0.28px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>{`To `}</p>
    </div>
  );
}

function Spacer1() {
  return (
    <div className="content-stretch flex h-full items-center justify-between relative shrink-0 w-[8px]" data-name="spacer">
      <div className="shrink-0 size-[8px]" data-name="_spacer" />
    </div>
  );
}

function ComponentsInputAffix1() {
  return (
    <div className="h-full relative shrink-0 w-[14px]" data-name="components/input-affix">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 23">
        <g clipPath="url(#clip0_55_31655)" id="components/input-affix">
          <path d={svgPaths.p2d20d500} fill="var(--fill-0, black)" fillOpacity="0.45" id="Union" />
        </g>
        <defs>
          <clipPath id="clip0_55_31655">
            <rect fill="white" height="23" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function TimePicker1() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 w-[215px]" data-name="time-picker">
      <div className="box-border content-stretch flex items-center overflow-clip px-[12px] py-[4px] relative rounded-[inherit] w-[215px]">
        <Placeholder2 />
        <div className="flex flex-row items-center self-stretch">
          <InputSeperatorPickerSeparator1 />
        </div>
        <Placeholder3 />
        <div className="flex flex-row items-center self-stretch">
          <Spacer1 />
        </div>
        <div className="flex flex-row items-center self-stretch">
          <ComponentsInputAffix1 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[16px] h-[31px] items-center relative shrink-0 w-[390px]">
      <Checkbox1 />
      <TimePicker1 />
    </div>
  );
}

function CheckboxInactiveDefault() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Checkbox/Inactive/Default">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Checkbox/Inactive/Default">
          <g id="Plate">
            <mask fill="white" id="path-2-inside-1_55_31589">
              <path d={svgPaths.p1d1d6d00} />
            </mask>
            <path d={svgPaths.p1d1d6d00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p3ab9ab80} fill="var(--stroke-0, #D9D9D9)" mask="url(#path-2-inside-1_55_31589)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function CheckboxWrapper2() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-start px-0 py-[3px] relative shrink-0" data-name="Checkbox Wrapper">
      <CheckboxInactiveDefault />
    </div>
  );
}

function Checkbox2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[56px]" data-name="Checkbox">
      <CheckboxWrapper2 />
      <p className="font-['SF_Pro_Text:Regular',_sans-serif] leading-[22px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.88)] text-nowrap whitespace-pre">Tue</p>
    </div>
  );
}

function Placeholder4() {
  return (
    <div className="basis-0 box-border content-stretch flex gap-[4px] grow items-center min-h-px min-w-px overflow-clip px-0 py-px relative shrink-0" data-name="placeholder">
      <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.45)] text-nowrap tracking-[-0.28px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>{`From `}</p>
    </div>
  );
}

function IconSwapRight2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="icon/SwapRight">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icon/SwapRight">
          <path d={svgPaths.p12c4a680} fill="var(--fill-0, black)" fillOpacity="0.45" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function InputSeperatorPickerSeparator2() {
  return (
    <div className="box-border content-stretch flex gap-[10px] h-full items-center justify-center opacity-[0.87] px-[8px] py-px relative shrink-0 w-[32px]" data-name="input-seperator/picker-separator">
      <IconSwapRight2 />
    </div>
  );
}

function Placeholder5() {
  return (
    <div className="basis-0 box-border content-stretch flex gap-[4px] grow items-start min-h-px min-w-px overflow-clip px-0 py-px relative shrink-0" data-name="placeholder">
      <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.45)] text-nowrap tracking-[-0.28px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>{`To `}</p>
    </div>
  );
}

function Spacer2() {
  return (
    <div className="content-stretch flex h-full items-center justify-between relative shrink-0 w-[8px]" data-name="spacer">
      <div className="shrink-0 size-[8px]" data-name="_spacer" />
    </div>
  );
}

function ComponentsInputAffix2() {
  return (
    <div className="h-full relative shrink-0 w-[14px]" data-name="components/input-affix">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 23">
        <g clipPath="url(#clip0_55_31655)" id="components/input-affix">
          <path d={svgPaths.p2d20d500} fill="var(--fill-0, black)" fillOpacity="0.45" id="Union" />
        </g>
        <defs>
          <clipPath id="clip0_55_31655">
            <rect fill="white" height="23" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function TimePicker2() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 w-[215px]" data-name="time-picker">
      <div className="box-border content-stretch flex items-center overflow-clip px-[12px] py-[4px] relative rounded-[inherit] w-[215px]">
        <Placeholder4 />
        <div className="flex flex-row items-center self-stretch">
          <InputSeperatorPickerSeparator2 />
        </div>
        <Placeholder5 />
        <div className="flex flex-row items-center self-stretch">
          <Spacer2 />
        </div>
        <div className="flex flex-row items-center self-stretch">
          <ComponentsInputAffix2 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[16px] h-[31px] items-center relative shrink-0 w-[390px]">
      <Checkbox2 />
      <TimePicker2 />
    </div>
  );
}

function CheckboxInactiveDefault1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Checkbox/Inactive/Default">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Checkbox/Inactive/Default">
          <g id="Plate">
            <mask fill="white" id="path-2-inside-1_55_31589">
              <path d={svgPaths.p1d1d6d00} />
            </mask>
            <path d={svgPaths.p1d1d6d00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p3ab9ab80} fill="var(--stroke-0, #D9D9D9)" mask="url(#path-2-inside-1_55_31589)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function CheckboxWrapper3() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-start px-0 py-[3px] relative shrink-0" data-name="Checkbox Wrapper">
      <CheckboxInactiveDefault1 />
    </div>
  );
}

function Checkbox3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[56px]" data-name="Checkbox">
      <CheckboxWrapper3 />
      <p className="font-['SF_Pro_Text:Regular',_sans-serif] leading-[22px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.88)] text-nowrap whitespace-pre">Wed</p>
    </div>
  );
}

function Placeholder6() {
  return (
    <div className="basis-0 box-border content-stretch flex gap-[4px] grow items-center min-h-px min-w-px overflow-clip px-0 py-px relative shrink-0" data-name="placeholder">
      <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.45)] text-nowrap tracking-[-0.28px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>{`From `}</p>
    </div>
  );
}

function IconSwapRight3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="icon/SwapRight">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icon/SwapRight">
          <path d={svgPaths.p12c4a680} fill="var(--fill-0, black)" fillOpacity="0.45" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function InputSeperatorPickerSeparator3() {
  return (
    <div className="box-border content-stretch flex gap-[10px] h-full items-center justify-center opacity-[0.87] px-[8px] py-px relative shrink-0 w-[32px]" data-name="input-seperator/picker-separator">
      <IconSwapRight3 />
    </div>
  );
}

function Placeholder7() {
  return (
    <div className="basis-0 box-border content-stretch flex gap-[4px] grow items-start min-h-px min-w-px overflow-clip px-0 py-px relative shrink-0" data-name="placeholder">
      <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.45)] text-nowrap tracking-[-0.28px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>{`To `}</p>
    </div>
  );
}

function Spacer3() {
  return (
    <div className="content-stretch flex h-full items-center justify-between relative shrink-0 w-[8px]" data-name="spacer">
      <div className="shrink-0 size-[8px]" data-name="_spacer" />
    </div>
  );
}

function ComponentsInputAffix3() {
  return (
    <div className="h-full relative shrink-0 w-[14px]" data-name="components/input-affix">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 23">
        <g clipPath="url(#clip0_55_31655)" id="components/input-affix">
          <path d={svgPaths.p2d20d500} fill="var(--fill-0, black)" fillOpacity="0.45" id="Union" />
        </g>
        <defs>
          <clipPath id="clip0_55_31655">
            <rect fill="white" height="23" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function TimePicker3() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 w-[215px]" data-name="time-picker">
      <div className="box-border content-stretch flex items-center overflow-clip px-[12px] py-[4px] relative rounded-[inherit] w-[215px]">
        <Placeholder6 />
        <div className="flex flex-row items-center self-stretch">
          <InputSeperatorPickerSeparator3 />
        </div>
        <Placeholder7 />
        <div className="flex flex-row items-center self-stretch">
          <Spacer3 />
        </div>
        <div className="flex flex-row items-center self-stretch">
          <ComponentsInputAffix3 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[16px] h-[31px] items-center relative shrink-0 w-[390px]">
      <Checkbox3 />
      <TimePicker3 />
    </div>
  );
}

function CheckboxInactiveDefault2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Checkbox/Inactive/Default">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Checkbox/Inactive/Default">
          <g id="Plate">
            <mask fill="white" id="path-2-inside-1_55_31589">
              <path d={svgPaths.p1d1d6d00} />
            </mask>
            <path d={svgPaths.p1d1d6d00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p3ab9ab80} fill="var(--stroke-0, #D9D9D9)" mask="url(#path-2-inside-1_55_31589)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function CheckboxWrapper4() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-start px-0 py-[3px] relative shrink-0" data-name="Checkbox Wrapper">
      <CheckboxInactiveDefault2 />
    </div>
  );
}

function Checkbox4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[56px]" data-name="Checkbox">
      <CheckboxWrapper4 />
      <p className="font-['SF_Pro_Text:Regular',_sans-serif] leading-[22px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.88)] text-nowrap whitespace-pre">Thu</p>
    </div>
  );
}

function Placeholder8() {
  return (
    <div className="basis-0 box-border content-stretch flex gap-[4px] grow items-center min-h-px min-w-px overflow-clip px-0 py-px relative shrink-0" data-name="placeholder">
      <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.45)] text-nowrap tracking-[-0.28px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>{`From `}</p>
    </div>
  );
}

function IconSwapRight4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="icon/SwapRight">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icon/SwapRight">
          <path d={svgPaths.p12c4a680} fill="var(--fill-0, black)" fillOpacity="0.45" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function InputSeperatorPickerSeparator4() {
  return (
    <div className="box-border content-stretch flex gap-[10px] h-full items-center justify-center opacity-[0.87] px-[8px] py-px relative shrink-0 w-[32px]" data-name="input-seperator/picker-separator">
      <IconSwapRight4 />
    </div>
  );
}

function Placeholder9() {
  return (
    <div className="basis-0 box-border content-stretch flex gap-[4px] grow items-start min-h-px min-w-px overflow-clip px-0 py-px relative shrink-0" data-name="placeholder">
      <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.45)] text-nowrap tracking-[-0.28px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>{`To `}</p>
    </div>
  );
}

function Spacer4() {
  return (
    <div className="content-stretch flex h-full items-center justify-between relative shrink-0 w-[8px]" data-name="spacer">
      <div className="shrink-0 size-[8px]" data-name="_spacer" />
    </div>
  );
}

function ComponentsInputAffix4() {
  return (
    <div className="h-full relative shrink-0 w-[14px]" data-name="components/input-affix">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 23">
        <g clipPath="url(#clip0_55_31655)" id="components/input-affix">
          <path d={svgPaths.p2d20d500} fill="var(--fill-0, black)" fillOpacity="0.45" id="Union" />
        </g>
        <defs>
          <clipPath id="clip0_55_31655">
            <rect fill="white" height="23" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function TimePicker4() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 w-[215px]" data-name="time-picker">
      <div className="box-border content-stretch flex items-center overflow-clip px-[12px] py-[4px] relative rounded-[inherit] w-[215px]">
        <Placeholder8 />
        <div className="flex flex-row items-center self-stretch">
          <InputSeperatorPickerSeparator4 />
        </div>
        <Placeholder9 />
        <div className="flex flex-row items-center self-stretch">
          <Spacer4 />
        </div>
        <div className="flex flex-row items-center self-stretch">
          <ComponentsInputAffix4 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[16px] h-[31px] items-center relative shrink-0 w-[390px]">
      <Checkbox4 />
      <TimePicker4 />
    </div>
  );
}

function CheckboxInactiveDefault3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Checkbox/Inactive/Default">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Checkbox/Inactive/Default">
          <g id="Plate">
            <mask fill="white" id="path-2-inside-1_55_31589">
              <path d={svgPaths.p1d1d6d00} />
            </mask>
            <path d={svgPaths.p1d1d6d00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p3ab9ab80} fill="var(--stroke-0, #D9D9D9)" mask="url(#path-2-inside-1_55_31589)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function CheckboxWrapper5() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-start px-0 py-[3px] relative shrink-0" data-name="Checkbox Wrapper">
      <CheckboxInactiveDefault3 />
    </div>
  );
}

function Checkbox5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[56px]" data-name="Checkbox">
      <CheckboxWrapper5 />
      <p className="font-['SF_Pro_Text:Regular',_sans-serif] leading-[22px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.88)] text-nowrap whitespace-pre">Fri</p>
    </div>
  );
}

function Placeholder10() {
  return (
    <div className="basis-0 box-border content-stretch flex gap-[4px] grow items-center min-h-px min-w-px overflow-clip px-0 py-px relative shrink-0" data-name="placeholder">
      <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.45)] text-nowrap tracking-[-0.28px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>{`From `}</p>
    </div>
  );
}

function IconSwapRight5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="icon/SwapRight">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icon/SwapRight">
          <path d={svgPaths.p12c4a680} fill="var(--fill-0, black)" fillOpacity="0.45" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function InputSeperatorPickerSeparator5() {
  return (
    <div className="box-border content-stretch flex gap-[10px] h-full items-center justify-center opacity-[0.87] px-[8px] py-px relative shrink-0 w-[32px]" data-name="input-seperator/picker-separator">
      <IconSwapRight5 />
    </div>
  );
}

function Placeholder11() {
  return (
    <div className="basis-0 box-border content-stretch flex gap-[4px] grow items-start min-h-px min-w-px overflow-clip px-0 py-px relative shrink-0" data-name="placeholder">
      <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.45)] text-nowrap tracking-[-0.28px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>{`To `}</p>
    </div>
  );
}

function Spacer5() {
  return (
    <div className="content-stretch flex h-full items-center justify-between relative shrink-0 w-[8px]" data-name="spacer">
      <div className="shrink-0 size-[8px]" data-name="_spacer" />
    </div>
  );
}

function ComponentsInputAffix5() {
  return (
    <div className="h-full relative shrink-0 w-[14px]" data-name="components/input-affix">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 23">
        <g clipPath="url(#clip0_55_31655)" id="components/input-affix">
          <path d={svgPaths.p2d20d500} fill="var(--fill-0, black)" fillOpacity="0.45" id="Union" />
        </g>
        <defs>
          <clipPath id="clip0_55_31655">
            <rect fill="white" height="23" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function TimePicker5() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 w-[215px]" data-name="time-picker">
      <div className="box-border content-stretch flex items-center overflow-clip px-[12px] py-[4px] relative rounded-[inherit] w-[215px]">
        <Placeholder10 />
        <div className="flex flex-row items-center self-stretch">
          <InputSeperatorPickerSeparator5 />
        </div>
        <Placeholder11 />
        <div className="flex flex-row items-center self-stretch">
          <Spacer5 />
        </div>
        <div className="flex flex-row items-center self-stretch">
          <ComponentsInputAffix5 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[16px] h-[31px] items-center relative shrink-0 w-[390px]">
      <Checkbox5 />
      <TimePicker5 />
    </div>
  );
}

function CheckboxInactiveDefault4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Checkbox/Inactive/Default">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Checkbox/Inactive/Default">
          <g id="Plate">
            <mask fill="white" id="path-2-inside-1_55_31589">
              <path d={svgPaths.p1d1d6d00} />
            </mask>
            <path d={svgPaths.p1d1d6d00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p3ab9ab80} fill="var(--stroke-0, #D9D9D9)" mask="url(#path-2-inside-1_55_31589)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function CheckboxWrapper6() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-start px-0 py-[3px] relative shrink-0" data-name="Checkbox Wrapper">
      <CheckboxInactiveDefault4 />
    </div>
  );
}

function Checkbox6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[56px]" data-name="Checkbox">
      <CheckboxWrapper6 />
      <p className="font-['SF_Pro_Text:Regular',_sans-serif] leading-[22px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.88)] text-nowrap whitespace-pre">Sat</p>
    </div>
  );
}

function Placeholder12() {
  return (
    <div className="basis-0 box-border content-stretch flex gap-[4px] grow items-center min-h-px min-w-px overflow-clip px-0 py-px relative shrink-0" data-name="placeholder">
      <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.45)] text-nowrap tracking-[-0.28px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>{`From `}</p>
    </div>
  );
}

function IconSwapRight6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="icon/SwapRight">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icon/SwapRight">
          <path d={svgPaths.p12c4a680} fill="var(--fill-0, black)" fillOpacity="0.45" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function InputSeperatorPickerSeparator6() {
  return (
    <div className="box-border content-stretch flex gap-[10px] h-full items-center justify-center opacity-[0.87] px-[8px] py-px relative shrink-0 w-[32px]" data-name="input-seperator/picker-separator">
      <IconSwapRight6 />
    </div>
  );
}

function Placeholder13() {
  return (
    <div className="basis-0 box-border content-stretch flex gap-[4px] grow items-start min-h-px min-w-px overflow-clip px-0 py-px relative shrink-0" data-name="placeholder">
      <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.45)] text-nowrap tracking-[-0.28px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>{`To `}</p>
    </div>
  );
}

function Spacer6() {
  return (
    <div className="content-stretch flex h-full items-center justify-between relative shrink-0 w-[8px]" data-name="spacer">
      <div className="shrink-0 size-[8px]" data-name="_spacer" />
    </div>
  );
}

function ComponentsInputAffix6() {
  return (
    <div className="h-full relative shrink-0 w-[14px]" data-name="components/input-affix">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 23">
        <g clipPath="url(#clip0_55_31655)" id="components/input-affix">
          <path d={svgPaths.p2d20d500} fill="var(--fill-0, black)" fillOpacity="0.45" id="Union" />
        </g>
        <defs>
          <clipPath id="clip0_55_31655">
            <rect fill="white" height="23" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function TimePicker6() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 w-[215px]" data-name="time-picker">
      <div className="box-border content-stretch flex items-center overflow-clip px-[12px] py-[4px] relative rounded-[inherit] w-[215px]">
        <Placeholder12 />
        <div className="flex flex-row items-center self-stretch">
          <InputSeperatorPickerSeparator6 />
        </div>
        <Placeholder13 />
        <div className="flex flex-row items-center self-stretch">
          <Spacer6 />
        </div>
        <div className="flex flex-row items-center self-stretch">
          <ComponentsInputAffix6 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[16px] h-[31px] items-center relative shrink-0 w-[390px]">
      <Checkbox6 />
      <TimePicker6 />
    </div>
  );
}

function TimeRange() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[8px] items-start pl-[24px] pr-0 py-px relative shrink-0" data-name="time range">
      <InputField />
      <Frame />
      <Frame6 />
      <Frame2 />
      <Frame3 />
      <Frame5 />
      <Frame7 />
      <Frame4 />
    </div>
  );
}

function IconInfoCircleOutlined() {
  return (
    <div className="absolute left-[222px] size-[18px] top-[9px]" data-name="Icon / InfoCircleOutlined">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon / InfoCircleOutlined">
          <g id="Vector">
            <path d={svgPaths.p64ee980} fill="black" fillOpacity="0.45" />
            <path d={svgPaths.p14742a80} fill="black" fillOpacity="0.45" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ContentWrapper1() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[8px] items-start px-0 py-[8px] relative shrink-0 w-full" data-name="Content Wrapper">
      <Radio />
      <Radio1 />
      <TimeRange />
      <IconInfoCircleOutlined />
    </div>
  );
}

function FormFormItemVertical() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Form / Form Item / Vertical">
      <ContentWrapper1 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <PageHeader1 />
      <FormFormItemVertical />
    </div>
  );
}

function Title2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Title">
      <div className="basis-0 flex flex-col font-['SF_Pro_Text:Medium',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[20px] text-[rgba(0,0,0,0.88)] text-nowrap">
        <p className="[white-space-collapse:collapse] leading-[28px] overflow-ellipsis overflow-hidden">Recipients</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Text">
      <div className="flex flex-col font-['Roboto:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.65)] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[22px] whitespace-pre">Choose which customers you want to send away messages to.</p>
      </div>
    </div>
  );
}

function Subtitle1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="subtitle">
      <Text1 />
    </div>
  );
}

function SearchAndFilter1() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative self-stretch shrink-0" data-name="search and filter">
      <Title2 />
      <Subtitle1 />
    </div>
  );
}

function ContentWrapper2() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="Content Wrapper">
      <SearchAndFilter1 />
    </div>
  );
}

function PageHeader2() {
  return (
    <div className="content-stretch flex h-[50px] items-start justify-between relative shrink-0 w-full" data-name="Page Header">
      <ContentWrapper2 />
    </div>
  );
}

function PageHeader3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Page Header">
      <PageHeader2 />
    </div>
  );
}

function RadioButton2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Radio Button">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Radio Button">
          <circle cx="8" cy="8" fill="var(--fill-0, white)" id="Plate" r="7.5" stroke="var(--stroke-0, #D9D9D9)" />
        </g>
      </svg>
    </div>
  );
}

function Radio2() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Radio">
      <RadioButton2 />
      <p className="font-['SF_Pro:Regular',_sans-serif] font-normal leading-[22px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.88)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>{`Send to the newly received conversations only `}</p>
    </div>
  );
}

function RadioButton3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Radio Button">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Radio Button">
          <circle cx="8" cy="8" fill="var(--fill-0, white)" id="Plate" r="7.5" stroke="var(--stroke-0, #D9D9D9)" />
        </g>
      </svg>
    </div>
  );
}

function Radio3() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Radio">
      <RadioButton3 />
      <p className="font-['SF_Pro:Regular',_sans-serif] font-normal leading-[22px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.88)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>{`Send to open conversations only `}</p>
    </div>
  );
}

function RadioButton4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Radio Button">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Radio Button">
          <circle cx="8" cy="8" fill="var(--fill-0, white)" id="Plate" r="7.5" stroke="var(--stroke-0, #1677FF)" />
          <circle cx="8" cy="8" fill="var(--fill-0, #1677FF)" id="Ellipse" r="4" />
        </g>
      </svg>
    </div>
  );
}

function Radio4() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Radio">
      <RadioButton4 />
      <p className="font-['SF_Pro:Regular',_sans-serif] font-normal leading-[22px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.88)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>{`Send to all conversations `}</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Radio4 />
    </div>
  );
}

function ContentWrapper3() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[8px] items-start px-0 py-[8px] relative shrink-0 w-full" data-name="Content Wrapper">
      <Radio2 />
      <Radio3 />
      <Frame13 />
    </div>
  );
}

function FormFormItemVertical1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[764px]" data-name="Form / Form Item / Vertical">
      <ContentWrapper3 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <PageHeader3 />
      <FormFormItemVertical1 />
    </div>
  );
}

function Title3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Title">
      <div className="basis-0 flex flex-col font-['SF_Pro_Text:Medium',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[20px] text-[rgba(0,0,0,0.88)] text-nowrap">
        <p className="[white-space-collapse:collapse] leading-[28px] overflow-ellipsis overflow-hidden">{`Messages `}</p>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Text">
      <div className="flex flex-col font-['Roboto:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.65)] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[22px] whitespace-pre">{`Automatically reply once for each sender with the following messages: `}</p>
      </div>
    </div>
  );
}

function Subtitle2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="subtitle">
      <Text2 />
    </div>
  );
}

function SearchAndFilter2() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative self-stretch shrink-0" data-name="search and filter">
      <Title3 />
      <Subtitle2 />
    </div>
  );
}

function ContentWrapper4() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="Content Wrapper">
      <SearchAndFilter2 />
    </div>
  );
}

function PageHeader4() {
  return (
    <div className="content-stretch flex h-[50px] items-start justify-between relative shrink-0 w-full" data-name="Page Header">
      <ContentWrapper4 />
    </div>
  );
}

function PageHeader5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Page Header">
      <PageHeader4 />
    </div>
  );
}

function IconQuestionCircleOutlined1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon / QuestionCircleOutlined">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon / QuestionCircleOutlined">
          <g id="Vector">
            <path d={svgPaths.p929f780} fill="black" fillOpacity="0.45" />
            <path d={svgPaths.p26d44d80} fill="black" fillOpacity="0.45" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function FormFormLabelVertical1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Form / Form Label Vertical">
      <p className="font-['SF_Pro_Text:Regular',_sans-serif] leading-[22px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.88)] text-nowrap whitespace-pre">Wait time between replies</p>
      <IconQuestionCircleOutlined1 />
    </div>
  );
}

function ContentWrapper5() {
  return (
    <div className="box-border content-stretch flex gap-[10px] h-[32px] items-center px-0 py-[4px] relative shrink-0 w-[79px]" data-name="Content Wrapper">
      <div className="basis-0 flex flex-col font-['SF_Pro_Text:Regular',_sans-serif] grow h-[32px] justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-[rgba(0,0,0,0.88)] text-nowrap">
        <p className="[white-space-collapse:collapse] leading-[22px] overflow-ellipsis overflow-hidden">12</p>
      </div>
    </div>
  );
}

function IconUpOutlined() {
  return (
    <div className="absolute left-[6px] size-[9px] top-[4px]" data-name="Icon / UpOutlined">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
        <g id="Icon / UpOutlined">
          <path d={svgPaths.p38733b00} fill="var(--fill-0, black)" fillOpacity="0.45" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconDownOutlined1() {
  return (
    <div className="absolute bottom-[4px] left-[6px] size-[9px]" data-name="Icon / DownOutlined">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
        <g id="Icon / DownOutlined">
          <path d={svgPaths.p38503900} fill="var(--fill-0, black)" fillOpacity="0.45" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function InputHandlerWrap() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.45)] bottom-0 opacity-0 right-px rounded-br-[2px] rounded-tr-[2px] top-0 w-[22px]" data-name="Input Handler Wrap">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute bg-white inset-0" />
        <IconUpOutlined />
        <IconDownOutlined1 />
        <div className="absolute h-0 left-px right-0 top-1/2 translate-y-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
            <g id="Line 1"></g>
          </svg>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-br-[2px] rounded-tr-[2px]" />
    </div>
  );
}

function InputNumber() {
  return (
    <div className="bg-white h-[32px] relative rounded-[6px] shrink-0" data-name="InputNumber">
      <div className="box-border content-stretch flex gap-[12px] h-[32px] items-center overflow-clip pl-[11px] pr-0 py-0 relative rounded-[inherit]">
        <ContentWrapper5 />
        <InputHandlerWrap />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function IconDownOutlined2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon / DownOutlined">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon / DownOutlined">
          <path d={svgPaths.p1d223800} fill="var(--fill-0, black)" fillOpacity="0.25" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SelectSelectInput1() {
  return (
    <div className="basis-0 bg-white box-border content-stretch flex gap-[4px] grow items-center min-h-px min-w-px px-[12px] py-0 relative rounded-[6px] shrink-0" data-name="Select / Select Input">
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-col font-['SF_Pro_Text:Regular',_sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-[rgba(0,0,0,0.88)] text-nowrap">
        <p className="leading-[22px] overflow-ellipsis overflow-hidden whitespace-pre">Hours</p>
      </div>
      <IconDownOutlined2 />
    </div>
  );
}

function SelectAndCreate1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[32px] items-start relative shrink-0" data-name="select and create">
      <SelectSelectInput1 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <InputNumber />
      <SelectAndCreate1 />
    </div>
  );
}

function InputField1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Input field">
      <FormFormLabelVertical1 />
      <Frame1 />
    </div>
  );
}

function CheckboxActiveDefault2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Checkbox/Active/Default">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Checkbox/Active/Default">
          <path d={svgPaths.p1d1d6d00} fill="var(--fill-0, #1677FF)" id="Plate" />
          <path d={svgPaths.p1da8a080} fill="var(--fill-0, white)" id="check" stroke="var(--stroke-0, white)" strokeWidth="0.3" />
        </g>
      </svg>
    </div>
  );
}

function CheckboxWrapper7() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-start px-0 py-[3px] relative shrink-0" data-name="Checkbox Wrapper">
      <CheckboxActiveDefault2 />
    </div>
  );
}

function Checkbox7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[180px]" data-name="Checkbox">
      <CheckboxWrapper7 />
      <p className="font-['SF_Pro_Text:Regular',_sans-serif] leading-[22px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.88)] text-nowrap whitespace-pre">{`During working hours `}</p>
    </div>
  );
}

function Resizer() {
  return (
    <div className="absolute bottom-[2px] h-[8px] right-[2.26px] w-[7.742px]" data-name="Resizer">
      <div className="absolute inset-[-2.17%_-2.32%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
          <g id="Resizer">
            <path d={svgPaths.pe64b000} id="Vector" stroke="var(--stroke-0, black)" strokeOpacity="0.88" strokeWidth="0.5" />
            <path d={svgPaths.p168e9980} id="Vector 2" stroke="var(--stroke-0, black)" strokeOpacity="0.88" strokeWidth="0.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function InputTextarea() {
  return (
    <div className="bg-white h-[54px] relative rounded-[6px] shrink-0 w-full" data-name="Input / Textarea">
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[54px] items-center px-[12px] py-[4px] relative w-full">
          <div className="basis-0 font-['SF_Pro:Regular',_sans-serif] font-normal grow h-full leading-[22px] min-h-px min-w-px relative shrink-0 text-[14px] text-[rgba(0,0,0,0.88)] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="mb-0" dir="auto">{`Thank you for your message.  We will reply to your message shortly.`}</p>
            <p dir="auto">{`شكراً على رسالتك.  سنقوم بالرد على رسالتك قريباً. `}</p>
          </div>
          <Resizer />
        </div>
      </div>
    </div>
  );
}

function FormFormItemVertical2() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Form / Form Item / Vertical">
      <InputTextarea />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <Checkbox7 />
      <FormFormItemVertical2 />
    </div>
  );
}

function CheckboxActiveDefault3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Checkbox/Active/Default">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Checkbox/Active/Default">
          <path d={svgPaths.p1d1d6d00} fill="var(--fill-0, #1677FF)" id="Plate" />
          <path d={svgPaths.p1da8a080} fill="var(--fill-0, white)" id="check" stroke="var(--stroke-0, white)" strokeWidth="0.3" />
        </g>
      </svg>
    </div>
  );
}

function CheckboxWrapper8() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-start px-0 py-[3px] relative shrink-0" data-name="Checkbox Wrapper">
      <CheckboxActiveDefault3 />
    </div>
  );
}

function Checkbox8() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[180px]" data-name="Checkbox">
      <CheckboxWrapper8 />
      <p className="font-['SF_Pro_Text:Regular',_sans-serif] leading-[22px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.88)] text-nowrap whitespace-pre">After working hours</p>
    </div>
  );
}

function Resizer1() {
  return (
    <div className="absolute bottom-[2px] h-[8px] right-[2.26px] w-[7.742px]" data-name="Resizer">
      <div className="absolute inset-[-2.17%_-2.32%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
          <g id="Resizer">
            <path d={svgPaths.pe64b000} id="Vector" stroke="var(--stroke-0, black)" strokeOpacity="0.88" strokeWidth="0.5" />
            <path d={svgPaths.p168e9980} id="Vector 2" stroke="var(--stroke-0, black)" strokeOpacity="0.88" strokeWidth="0.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function InputTextarea1() {
  return (
    <div className="bg-white h-[54px] relative rounded-[6px] shrink-0 w-full" data-name="Input / Textarea">
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[54px] items-center px-[12px] py-[4px] relative w-full">
          <div className="basis-0 font-['SF_Pro:Regular',_sans-serif] font-normal grow h-full leading-[22px] min-h-px min-w-px relative shrink-0 text-[14px] text-[rgba(0,0,0,0.88)]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="mb-0">Thank you for your message. We will respond during business hours.</p>
            <p>شكراً على رسالتك. سنقوم بالرد خلال ساعات العمل.</p>
          </div>
          <Resizer1 />
        </div>
      </div>
    </div>
  );
}

function FormFormItemVertical3() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Form / Form Item / Vertical">
      <InputTextarea1 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <Checkbox8 />
      <FormFormItemVertical3 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <PageHeader5 />
      <InputField1 />
      <Frame14 />
      <Frame16 />
    </div>
  );
}

function DividerHorizontal() {
  return (
    <div className="[grid-area:1_/_1] h-px ml-0 mt-0 relative w-[764px]" data-name="Divider Horizontal">
      <div className="absolute h-0 left-0 right-0 top-1/2 translate-y-[-50%]" data-name="Line">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]" style={{ "--stroke-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 764 1">
            <path d="M0 0.5H764" id="Line" stroke="var(--stroke-0, black)" strokeOpacity="0.06" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex gap-[8px] h-[32px] items-center justify-center relative shrink-0" data-name="Content">
      <p className="font-['SF_Pro_Text:Regular',_sans-serif] leading-[22px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">Save Changes</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#1677ff] box-border content-stretch flex flex-col gap-[8px] items-center justify-center px-[15px] py-0 relative rounded-[6px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#1677ff] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_2px_0px_0px_rgba(5,145,255,0.1)]" />
      <Content2 />
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex gap-[8px] h-[32px] items-center justify-center relative shrink-0" data-name="Content">
      <p className="font-['SF_Pro_Text:Regular',_sans-serif] leading-[22px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.88)] text-nowrap whitespace-pre">Discard</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[8px] items-center justify-center px-[15px] py-0 relative rounded-[6px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_2px_0px_0px_rgba(0,0,0,0.02)]" />
      <Content3 />
    </div>
  );
}

function Space1() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex gap-[16px] items-center ml-0 mt-[25px] relative" data-name="Space">
      <Button1 />
      <Button2 />
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <DividerHorizontal />
      <Space1 />
    </div>
  );
}

function ContentArea() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[24px] items-start pl-[8px] pr-0 py-0 relative shrink-0 w-[772px]" data-name="content area">
      <MainSettings />
      <Frame12 />
      <Frame11 />
      <Frame15 />
      <Group />
    </div>
  );
}

export default function Frame8() {
  return (
    <div className="bg-white relative size-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start p-[24px] relative size-full">
          <PageTitle />
          <ContentArea />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_-0.5px_0px_0px_inset_#f0f0f0,0px_0.5px_0px_0px_inset_#f0f0f0]" />
    </div>
  );
}