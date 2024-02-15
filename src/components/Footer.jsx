
const Footer = () => {


  const footerLinks =[
    {href:"",link:'Contact Us'},
    {href:"",link:'Help Center'},
    {href:"",link:'System Status'},
    {href:"",link:'Privacy Policy'},
    {href:"",link:'Terms'},
  ]
  const wp =[
    {href:'',name:'WhatsApp Widget'},
    {href:'',name:'WhatsApp For Team'},
    {href:'',name:'Join Affiliate Program'}

  ]
  return (
    <div className='ml-6 mr-6 flex  w-full flex-col sm:px-6 lg:px-8'>
      <div className='p-4 flex w-full justify-center gap-8 font-md pb-10'>
    {wp.map((li)=>(
    <a key={li.name} className=' text-md text-indigo-950 hover:text-green-500'>{li.name}</a>
    ))}
      </div>
      <div className='p-4  flex w-full pb-10 justify-between md:flex-row '>
      <div className=' w-30 '>@micro.company</div>
      <div className=' w-70 flex justify-center gap-8 flex-wrap mr-7  '>
        {footerLinks.map((link)=>(
          <a className=' font-md text-indigo-950 hover:text-green-500' key={link.link}>{link.link}</a>
        ))}
      </div>
      </div>
    </div>
  )
}

export default Footer