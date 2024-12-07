import { RecoilRoot, useRecoilValue } from "recoil"
import { jobsAtom, messagingAtom, networkAtom, notificationsAtom, totalNotificationsCountSelector } from "./Atoms"
import { useMemo } from "react"

function App() {
  return(
    <RecoilRoot>
      <MainApp>
      
      </MainApp>
    </RecoilRoot>
  )
}

function MainApp(){

  const networkNotificationCount = useRecoilValue(networkAtom)
  const jobsNotificationCount = useRecoilValue(jobsAtom)
  const notificationNotificationCount = useRecoilValue(notificationsAtom)
  const messagingNotificationCount = useRecoilValue(messagingAtom)

  // use useRecoilState - to get both value and function
  // use useSetRecoilState - to get function only

  // Let's say you want to show total of all notification counts above Me button

  // const totalNotificationsCount = useMemo(() => {
  //   return networkNotificationCount + jobsNotificationCount + notificationNotificationCount + messagingNotificationCount;
  // }, [messagingNotificationCount, networkNotificationCount, jobsNotificationCount, notificationNotificationCount])

  const totalNotificationsCount = useRecoilValue(totalNotificationsCountSelector)

  return (
    <div>

      <button>Home</button>
      <button>My network ({networkNotificationCount >= 100 ? "99+" : networkNotificationCount})</button>
      <button>Jobs ({jobsNotificationCount})</button>
      <button>Messaging ({messagingNotificationCount})</button>
      <button>Notifications ({notificationNotificationCount})</button>
      <button>Me ({totalNotificationsCount})</button>

    </div>
  )
}

export default App
