// utils/githubHelpers.js
var axios = require('axios');


var base = 'https://api.github.com/users/';
var id = 'f0c6fbacada9d51c5184';
var sec = '2cda01426ed756d1d9ffe5748bdd22bb1ea83891';
var param = "?client_id=" + id + "&client_secret=" + sec;



function getUserInfo (username) {
    return axios.get(base + username + param);
}

function getRepos(username) {
    return axios.get(base + username + '/repos' + param + '&per_page=100');
}

function getTotalStars(repos) {
    return repos.data.reduce(function (prev, current) {
        return prev + current.stargazers_count
    }, 0)
}

function getPlayersData(player) {
    return getRepos(player.login)
        .then(getTotalStars)
        .then(function (totalStars) {
            return {
                followers: player.followers,
                totalStars: totalStars
            }
        })
}

function calculateScores(players) {
    return [
        players[0].followers * 3 + players[0].totalStars,
        players[1].followers * 3 + players[1].totalStars,
    ]
}

var helpers = {
    getPlayersInfo: function (players) {
        return axios.all(players.map(function (username) {
            return getUserInfo(username)
        }))
            .then(function (info) {
                return info.map(function (user) {
                    return user.data
                })
            })
            .catch(function (err) {console.warn('Error in getPlayersInfo: ', err)})
    },
    battle: function (players) {
        var playerOneData = getPlayersData(players[0]);
        var playerTwoData = getPlayersData(players[1]);
        return axios.all([playerOneData, playerTwoData])
            .then(calculateScores)
            .catch(function (err) {console.warn('Error in getPlayersInfo: ', err)})
    }
};

module.exports = helpers;