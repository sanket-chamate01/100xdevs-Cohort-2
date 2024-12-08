import { RevenueCard } from "./components/RevenueCard"

// clone link - https://dashboard-clone-dukaan.vercel.app/

function App() {

  return (
    <div className="grid grid-cols-3">
      <RevenueCard title={"Amount Pending"} orderCount={13} amount={"94,520.10"}></RevenueCard>
    </div>
  )
}

export default App
