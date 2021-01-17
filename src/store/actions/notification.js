export const DISPLAY_NOTIFICATION = 'DISPLAY_NOTIFICATION';
export const REMOVE_NOTIFICATION = 'REMOVE_NOTIFICATION';

export const displayNotification = notification => {
    return { type: DISPLAY_NOTIFICATION, notification: notification}
}

export const removeNotification = () => {
    return {type: REMOVE_NOTIFICATION}
}