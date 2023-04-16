const breadcrumbs = ['Development', 'eu-north-1', 'dev-eun1-dev1']

function Breadcrumbs() {
  return (
    <div className="flex py-5 text-xl text-ktl-blue-dark">
      {breadcrumbs.map((breadcrumb, index) => (
        <div
          key={breadcrumb}
          className={
            index + 1 === breadcrumbs.length
              ? 'font-bold'
              : 'cursor-pointer font-normal'
          }
        >
          {breadcrumb}
          {index + 1 < breadcrumbs.length && (
            <div className="ktl-slash mx-3 inline-block" />
          )}
        </div>
      ))}
    </div>
  )
}

export default Breadcrumbs
