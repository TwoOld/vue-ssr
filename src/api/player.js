export default http => ({
    get_players() {
        return http.get('/api/player/list')
    }
})