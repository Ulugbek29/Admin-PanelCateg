const FRow = ({ label, children, required }) => {
    return (
      <div className={`w-full flex justify-between gap-8 mb-8`} >
        <div className="text-base font-semibold  flex w-[15%]">{label} {required && <span className="requiredStart">*</span>}</div>
        <div className="w-[85%] h-full">{children}</div>
      </div>  
    )
  }
  
  
  
  export default FRow