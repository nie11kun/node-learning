if (process.env.NODE_ENV === 'development') {
    console.log('running on development environment')
}
if (process.env.NODE_ENV === 'production') {
    console.log('running on production environment')
}
if (['production', 'staging'].indexOf(process.env.NODE_ENV) != -1) {
    console.log('running on production environment')
} else {
    console.log('running on development environment')
}