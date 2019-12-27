export default http => ({
    get_players() {
        return http.get('/player/list')
    }
})