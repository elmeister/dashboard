function TableServicesRow() {
  return (
    <tr>
      <td>
        <input defaultValue="backend" />
      </td>
      <td>
        <input defaultValue="kuttleio/backend" />
      </td>
      <td>
        <input defaultValue="/" />
      </td>
      <td>
        <div className="flex cursor-pointer items-center justify-between px-3 text-sm">
          <div
            className="w-[110px] rounded border-[1px] border-solid border-ktl-green bg-ktl-green/10 
            text-center"
          >
            From branch
          </div>
          <i className="ph ph-caret-down" />
        </div>
      </td>
      <td>
        <input defaultValue="develop" />
      </td>
      <td>
        <input type="number" step="0.05" defaultValue="0.25" />
      </td>
      <td>
        <input type="number" step="0.05" defaultValue="2.0" />
      </td>
      <td>
        <label className="flex h-full cursor-pointer items-center justify-center">
          <input defaultChecked type="checkbox" className="ktl-checkbox" />
        </label>
      </td>
      <td>
        <input defaultValue="https://dev1-frontend.dev.kuttle.io" />
      </td>
    </tr>
  )
}

export default TableServicesRow
