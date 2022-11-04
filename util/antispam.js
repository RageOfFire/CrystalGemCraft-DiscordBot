const AntiSpam = require("discord-anti-spam");
const antiSpam = new AntiSpam({
    warnThreshold: 3,
    muteThreshold: 4,
    maxInterval: 2000,
    warnMessage: "{@user}, Bớt spam lại hộ cái bro.",
    muteMessage: "**{user_tag}** đã bị mute vì spam.",
    maxDuplicatesWarning: 6,
    maxDuplicatesMute: 8,
    ignoredPermissions: ["ADMINISTRATOR", "MANAGE_CHANNELS"],
    ignoreBots: true,
    verbose: true,
    ignoredMembers: [],
    unMuteTime: 10,
    removeMessages: true,
    modLogsEnabled: false,
    modLogsChannelName: "mod-logs",
    modLogsMode: "embed",
});
module.exports = { antiSpam }