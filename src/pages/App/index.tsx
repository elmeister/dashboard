import Breadcrumbs from 'containers/Breadcrumbs'
import Tabs from 'containers/Tabs'
import kuttleLogo from 'assets/kuttle-logo.svg'

import TableServices from './TableServices'

function App() {
  return (
    <div className="min-h-screen w-full">
      <div className="flex h-16 items-center bg-ktl-blue-dark px-10 text-lg">
        <img src={kuttleLogo} alt="Kuttle logo" />
      </div>
      <div className="flex h-[60px] items-center justify-center shadow">
        <div className="ktl-pw flex items-center text-ktl-gray-1">
          <i className="ph ph-caret-left" />
          <div className="text-sm font-bold">Back to dashboard</div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="ktl-pw">
          <Breadcrumbs />
          <Tabs />
          <TableServices />
          <div className="flex justify-between py-10">
            <div>
              <button
                className="ktl-button hover: h-[40px] w-[120px] border-[1px] border-solid border-ktl-red
              from-gradient-start to-gradient-end text-ktl-red transition hover:bg-gradient-to-r hover:text-white"
              >
                <div className="flex items-center justify-center">
                  <i className="ph ph-trash text-lg" />
                  <div className="ml-2">Delete</div>
                </div>
              </button>
            </div>
            <div>
              <button
                className="ktl-button h-[40px] w-[120px] border-[1px] border-transparent 
                text-ktl-gray-1 hover:border-ktl-gray-1"
              >
                Cancel
              </button>
              <button
                className="ktl-button ml-2 h-[40px] w-[120px] bg-gradient-to-r from-gradient-start to-gradient-end
                text-white hover:brightness-110"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
