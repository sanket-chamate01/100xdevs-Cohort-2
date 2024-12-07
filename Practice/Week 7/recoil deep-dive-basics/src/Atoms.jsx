import { atom, selector } from 'recoil'

export const networkAtom = atom({
    key: "networkAtom",
    default: 5
})

export const jobsAtom = atom({
    key: "jobsAtom",
    default: 0
})

export const notificationsAtom = atom({
    key: "notificationsAtom",
    default: 14
})

export const messagingAtom = atom({
    key: "messagingAtom",
    default: 0
})

export const totalNotificationsCountSelector = selector({
    key: "totalNotificationsCount",
    get: ({get}) => {
        const networkNotificationCount = get(networkAtom)
        const jobsNotificationCount = get(jobsAtom)
        const notificationNotificationCount = get(notificationsAtom)
        const messagingNotificationCount = get(messagingAtom)

        return networkNotificationCount + jobsNotificationCount + notificationNotificationCount + messagingNotificationCount;
    }
})