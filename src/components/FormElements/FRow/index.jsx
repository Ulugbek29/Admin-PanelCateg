const FRow = ({ label, children, required, vertical= false }) => {
    return (
      <div className={`w-full flex justify-between gap-4 mb-8 ${vertical && "flex-col"}`} >
        <div className={`text-base font-semibold  flex w-[15%] ${vertical && "w-[30%]"}`}>{label} {required && <span className="requiredStart">*</span>}</div>
        <div className="w-[85%] h-full">{children}</div>
      </div>  
    )
  }
  
  
  
  export default FRow