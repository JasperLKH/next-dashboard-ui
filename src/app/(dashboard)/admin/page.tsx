import CountChart from "@/components/CountChart"
import UserCard from "@/components/UserCard"

const AdminPage = () => {
  return (
    <div className='p-4 flex gap-4 flex-col md:flex-row'>
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="student" />
          <UserCard type="teacher" />
          <UserCard type="staff" />
          <UserCard type="parent" /> 
        </div>
        <div className="flex gap-4 flex-col lg:flex-wrap">
          <div className="w-full lg:w-1/3 h-[450px]">
          <CountChart />
          </div>
          <div className="w-full lg:w-2/3 h-[450px]"></div>
        </div>
        <div className=""></div>
      </div>
      <div className="w-full lg:w-1/3"></div>
    </div>
  )
}

export default AdminPage