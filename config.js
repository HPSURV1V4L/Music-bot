module.exports = {
    app: {
        px: '>',
        token: 'Nzg5MTE2NDU3MTM2ODE2MTMw.X9tX-A.vGFNnS-u7zXWQbABGV6jNsfdduc',
        playing: 'by MyCraft1105'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'DJ',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 100,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
