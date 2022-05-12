Simple Discord auto entry giveaways for any giveaway bot
this is an old verison of discord libray so after installing the package & running the bot it will thorw errors
so what you gonna do is head to **`node_modules > discord.js > src > client > ClientDataManager.js`**
then add this code **`if(channel != null) guild.channels.set(channel.id, channel);`** to line 81 and it should looks like this :
![image](https://user-images.githubusercontent.com/86911257/167986689-d7d0c57a-dfaf-4d97-9bf6-c8ec77904d73.png)

Finally don't forgot to edit the channels id's to get notfication whenever you won a giveaway
