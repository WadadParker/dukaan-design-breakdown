
const Layout = () => {
  return (
    <div className="text-center">
        <div className="bg-red-100 inline h-10">div</div>
        <h1 className="bg-blue-100 inline h-10">h1</h1>
        <p className="bg-green-100 inline h-10">p</p>
        <span className="bg-amber-100 block h-10">span {"(height applies for block)"}</span>
        <b className="bg-violet-100 inline-block h-10">bold (behaves inline & height applies)</b>
        <li className="bg-orange-100 ">li</li>
        <small className="bg-gray-100 h-10">small (height does not apply for inline)</small>
    </div>
  )
}

export default Layout