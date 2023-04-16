import TableServicesRow from './TableServicesRow'

function TableServices() {
  return (
    <div className="w-full bg-white px-[39px] py-[31px]">
      <div className="mb-2 text-center text-lg font-semibold text-ktl-blue-dark">
        Services
      </div>
      <table className="ktl-table w-full table-fixed">
        <thead>
          <tr>
            <th className="w-[8.45%]">Name</th>
            <th className="w-[14.02%]">Git repo</th>
            <th className="w-[10.39%]">Dockerfile path</th>
            <th className="w-[14.86%]">Deploy</th>
            <th className="w-[9.29%]">Branch/version</th>
            <th className="w-[5.91%]">vCPU</th>
            <th className="w-[5.91%]">Memory</th>
            <th className="w-[6.76%]">Public</th>
            <th className="w-[25.34%]">URL</th>
          </tr>
        </thead>
        <tbody>
          <TableServicesRow />
          <TableServicesRow />
          <tr className="cursor-pointer border-[1px] border-t-0 border-solid border-ktl-gray-3 hover:bg-ktl-gray-3">
            <td colSpan={9}>
              <div className="px-2 text-sm font-semibold text-ktl-gray-1">
                + Add new Services
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default TableServices
