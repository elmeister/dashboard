import clsx from 'clsx'

const activeTab = 'Settings'
const tabs = [activeTab, 'Update version', 'Change log', 'YAML']

function Tabs() {
  return (
    <div className="flex py-3">
      {tabs.map(tab => (
        <div
          key={tab}
          className={clsx(
            'flex h-[48px] w-[120px] cursor-pointer items-center justify-center',
            'border-b-[3px] border-solid text-sm font-semibold',
            tab !== activeTab && 'border-transparent text-ktl-gray-1',
            'hover:border-ktl-blue-dark hover:text-ktl-blue-dark'
          )}
        >
          {tab}
        </div>
      ))}
    </div>
  )
}

export default Tabs
