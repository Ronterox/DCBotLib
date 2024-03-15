import { Client, IntentsBitField } from 'discord.js';
import { getEnv } from './utils';

console.log(`Running in ${process.env.NODE_ENV} mode`);

const token = getEnv('TOKEN');
console.log(`Token is ${token}`);

const client = new Client({ intents: IntentsBitField.Flags.Guilds });

client.once('ready', () => { console.log(`Logged in as ${client.user?.tag}`); });
client.login(token);
