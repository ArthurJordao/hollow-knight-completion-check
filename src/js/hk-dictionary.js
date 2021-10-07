/* Huge thanks to ManicJamie for his HKTranslator: https://github.com/ManicJamie/HKTranslator */

const MAP = {
  "Tutorial_01": "King's Pass",
  "Town": "Dirtmouth",
  "Room_shop": "Dirtmouth: Sly's Shop",
  "Room_Sly_Storeroom": "Dirtmouth: Sly's Shop Basement",
  "Room_Town_Stag_Station": "Dirtmouth: Stag Station",
  "Room_mapper": "Dirtmouth: Iselda's Shop",
  "Room_Bretta": "Dirtmouth: Bretta's Room",
  "Room_Bretta_Basement": "Dirtmouth: Bretta's Room Basement",
  "Room_Ouiji": "Dirtmouth: Jiji's Hut",
  "Room_Jinn": "Dirtmouth: Jinn's Hut",
  "Room_Tram_RG": "Upper Tram",
  "Room_Tram": "Lower Tram",
  "Crossroads_01": "Forgotten Crossroads: Well",
  "Crossroads_02": "Forgotten Crossroads: Outside Temple of the Black Egg",
  "Crossroads_03": "Forgotten Crossroads: Outside Stag Station",
  "Crossroads_04": "Forgotten Crossroads: Gruz Mother",
  "Crossroads_05": "Forgotten Crossroads: Central Grub",
  "Crossroads_06": "Forgotten Crossroads: Outside Ancestral Mound",
  "Crossroads_07": "Forgotten Crossroads: Gruzzer Vertical Room",
  "Crossroads_08": "Forgotten Crossroads: Aspid Arena",
  "Crossroads_09": "Forgotten Crossroads: Brooding Mawlek Boss",
  "Crossroads_10": "Forgotten Crossroads: False Knight Arena",
  "Crossroads_11_alt": "Forgotten Crossroads: Greenpath Entrance",
  "Crossroads_12": "Forgotten Crossroads: Corridor to Acid Grub",
  "Crossroads_13": "Forgotten Crossroads: Goam Mask Shard",
  "Crossroads_14": "Forgotten Crossroads: Outside Myla",
  "Crossroads_15": "Forgotten Crossroads: Corridor to Tram",
  "Crossroads_16": "Forgotten Crossroads: Above Lever",
  "Crossroads_18": "Forgotten Crossroads: Fungal Wastes Entrance",
  "Crossroads_19": "Forgotten Crossroads: Before Gruz Mother",
  "Crossroads_21": "Forgotten Crossroads: Outside False Knight",
  "Crossroads_22": "Forgotten Crossroads: Glowing Womb Arena",
  "Crossroads_25": "Forgotten Crossroads: Brooding Mawlek Entrance",
  "Crossroads_27": "Forgotten Crossroads: Outside Tram",
  "Crossroads_30": "Forgotten Crossroads: Hot Spring",
  "Crossroads_31": "Forgotten Crossroads: Spike Grub",
  "Crossroads_33": "Forgotten Crossroads: Cornifer",
  "Crossroads_35": "Forgotten Crossroads: Acid Grub",
  "Crossroads_36": "Forgotten Crossroads: Brooding Mawlek Middle",
  "Crossroads_37": "Forgotten Crossroads: Vessel Fragment",
  "Crossroads_38": "Forgotten Crossroads: Grubfather",
  "Crossroads_39": "Forgotten Crossroads: Corridor Right of Temple of the Black Egg",
  "Crossroads_40": "Forgotten Crossroads: Corridor Right of Central Grub",
  "Crossroads_42": "Forgotten Crossroads: Right of Mask Shard",
  "Crossroads_43": "Forgotten Crossroads: Corridor to Elevator",
  "Crossroads_45": "Forgotten Crossroads: Myla",
  "Crossroads_46": "Forgotten Crossroads: Tram",
  "Crossroads_47": "Forgotten Crossroads: Stag Station",
  "Crossroads_48": "Forgotten Crossroads: Husk Guard Grub",
  "Crossroads_49": "Forgotten Crossroads: Elevator",
  "Crossroads_52": "Forgotten Crossroads: Goam Journal",
  "Crossroads_ShamanTemple": "Forgotten Crossroads: Ancestral Mound",
  "Room_Mender_House": "Forgotten Crossroads: Menderbug House",
  "Room_Charm_Shop": "Forgotten Crossroads: Salubra's Shop",
  "Room_ruinhouse": "Forgotten Crossroads: Rescue Sly Hut",
  "Room_temple": "Forgotten Crossroads: Inside Temple of the Black Egg",
  "Fungus1_01": "Greenpath: Entrance",
  "Fungus1_01b": "Greenpath: Waterfall Bench",
  "Fungus1_02": "Greenpath: First Hornet Sighting",
  "Fungus1_03": "Greenpath: Storerooms",
  "Fungus1_04": "Greenpath: Hornet",
  "Fungus1_05": "Greenpath: Outside Thorns",
  "Fungus1_06": "Greenpath: Cornifer",
  "Fungus1_07": "Greenpath: Outside Hunter",
  "Fungus1_08": "Greenpath: Hunter",
  "Fungus1_09": "Greenpath: Sheo Gauntlet",
  "Fungus1_10": "Greenpath: Acid Bridge",
  "Fungus1_11": "Greenpath: Above Fog Canyon",
  "Fungus1_12": "Greenpath: Massive Moss Charger Corridor",
  "Fungus1_13": "Greenpath: Whispering Root",
  "Fungus1_14": "Greenpath: Thorns of Agony",
  "Fungus1_15": "Greenpath: Outside Sheo",
  "Fungus1_16_alt": "Greenpath: Stag Station",
  "Fungus1_17": "Greenpath: Moss Charger Corridor",
  "Fungus1_19": "Greenpath: Above Sanctuary Bench",
  "Fungus1_20_v02": "Greenpath: Vengefly King",
  "Fungus1_21": "Greenpath: Outside Hornet",
  "Fungus1_22": "Greenpath: Outside Stag Station",
  "Fungus1_25": "Greenpath: Corridor to Lake of Unn",
  "Fungus1_26": "Greenpath: Lake Of Unn",
  "Fungus1_29": "Greenpath: Massive Moss Charger",
  "Fungus1_30": "Greenpath: Below Toll Bench",
  "Fungus1_31": "Greenpath: Toll",
  "Fungus1_32": "Greenpath: Moss Knight Arena",
  "Fungus1_34": "Greenpath: Stone Sanctuary Entrance",
  "Fungus1_35": "Greenpath: Stone Sanctuary",
  "Fungus1_36": "Greenpath: Stone Sanctuary Mask Shard",
  "Fungus1_37": "Greenpath: Stone Sanctuary Bench",
  "Fungus1_Slug": "Greenpath: Unn",
  "Room_nailmaster_02": "Greenpath: Sheo",
  "Room_Slug_Shrine": "Greenpath: Lake of Unn Bench",
  "Deepnest_01": "Fungal Wastes: Deepnest Fall",
  "Fungus2_01": "Fungal Wastes: Queen's Station",
  "Fungus2_02": "Fungal Wastes: Queen's Station Stag",
  "Fungus2_03": "Fungal Wastes: Outside Queen's Station",
  "Fungus2_04": "Fungal Wastes: Below Shrumal Ogres",
  "Fungus2_05": "Fungal Wastes: Shrumal Ogres",
  "Fungus2_06": "Fungal Wastes: Outside Leg Eater",
  "Fungus2_07": "Fungal Wastes: Shrumal Warrior Acid Bridge",
  "Fungus2_08": "Fungal Wastes: Outside Elder Hu",
  "Fungus2_09": "Fungal Wastes: Cloth Corridor",
  "Fungus2_10": "Fungal Wastes: Left Of Pilgrim's Way",
  "Fungus2_11": "Fungal Wastes: Right of Bouncy Mushroom Grub",
  "Fungus2_12": "Fungal Wastes: Mantis Corridor",
  "Fungus2_13": "Fungal Wastes: Bretta Bench",
  "Fungus2_14": "Fungal Wastes: Mantis Village",
  "Fungus2_15": "Fungal Wastes: Mantis Lords",
  "Fungus2_17": "Fungal Wastes: Above Mantis Village",
  "Fungus2_18": "Fungal Wastes: Cornifer",
  "Fungus2_19": "Fungal Wastes: Right Of Spore Shroom",
  "Fungus2_20": "Fungal Wastes: Spore Shroom",
  "Fungus2_21": "Fungal Wastes: Pilgrim's Way",
  "Fungus2_23": "Fungal Wastes: Dashmaster",
  "Fungus2_26": "Fungal Wastes: Leg Eater",
  "Fungus2_28": "Fungal Wastes: Shrumal Warrior Loop",
  "Fungus2_29": "Fungal Wastes: Fungal Core Upper",
  "Fungus2_30": "Fungal Wastes: Fungal Core Lower",
  "Fungus2_31": "Fungal Wastes: Mantis Lords Rewards",
  "Fungus2_32": "Fungal Wastes: Elder Hu",
  "Fungus2_33": "Fungal Wastes: Leg Eater Root",
  "Fungus2_34": "Fungal Wastes: Willoh",
  "Fungus3_01": "Fog Upper West Tall",
  "Fungus3_02": "Fog Lower West Tall",
  "Fungus3_03": "Fog Queen's Gardens Acid Entrance",
  "Fungus3_24": "Fog Corridor to Overgrown Mound",
  "Fungus3_25": "Fog Cornifer",
  "Fungus3_25b": "Fog Corridor to Cornifer",
  "Fungus3_26": "Fog East Tall",
  "Fungus3_27": "Fog Corridor to Archives",
  "Fungus3_28": "Fog Charm Notch",
  "Fungus3_30": "Fog Lifeblood",
  "Fungus3_35": "Fog Millibelle",
  "Fungus3_44": "Fog Overgrown Mound Entrance",
  "Fungus3_47": "Fog Archives Entrance",
  "Fungus3_archive": "Fog Archives Bench",
  "Fungus3_archive_02": "Fog Uumuu Arena",
  "Room_Fungus_Shaman": "Fog Overgrown Mound",
  "Cliffs_01": "Cliffs Main",
  "Cliffs_02": "Cliffs Gorb",
  "Cliffs_03": "Cliffs Stag Nest",
  "Cliffs_04": "Cliffs Joni's Dark",
  "Cliffs_05": "Cliffs Joni's Pickup",
  "Cliffs_06": "Cliffs Grimm Lantern",
  "Fungus1_28": "Cliffs Baldur's Shell",
  "Room_nailmaster": "Cliffs Mato",
  "Mines_01": "Crystal Dive Entrance",
  "Mines_02": "Crystal Dark Entrance",
  "Mines_03": "Crystal Spike Grub",
  "Mines_04": "Crystal Entrance Conveyors",
  "Mines_05": "Crystal Above Spike Grub",
  "Mines_06": "Crystal Deep Focus Gauntlet",
  "Mines_07": "Crystal Dark Room",
  "Mines_10": "Crystal Elevator Entrance",
  "Mines_11": "Crystal Left Of Guardian",
  "Mines_13": "Crystal Top Corridor",
  "Mines_16": "Crystal Mimic",
  "Mines_17": "Crystal Corridor to Spike Grub",
  "Mines_18": "Crystal Guardian Bench",
  "Mines_19": "Crystal Grub Crushers",
  "Mines_20": "Crystal East Tall",
  "Mines_23": "Crystal Crown Whispering Root",
  "Mines_24": "Crystal Crown Grub",
  "Mines_25": "Crystal Crown Climb",
  "Mines_28": "Crystal Outside Mound",
  "Mines_29": "Crystal Dark Bench",
  "Mines_30": "Crystal Cornifer",
  "Mines_31": "Crystal Crystal Heart Gauntlet",
  "Mines_32": "Crystal Enraged Guardian Arena",
  "Mines_33": "Forgotten Crossroads: Crystal Peak Dark Toll",
  "Mines_34": "Crystal Crown Peak",
  "Mines_35": "Crystal Mound",
  "Mines_36": "Crystal Deep Focus",
  "Mines_37": "Crystal Chest Crushers",
  "Abyss_02": "Basin Broken Bridge",
  "Abyss_03": "Basin Tram",
  "Abyss_04": "Basin Fountain",
  "Abyss_05": "Basin Palace Grounds",
  "Abyss_17": "Basin Cloth",
  "Abyss_18": "Basin Corridor to Broken Vessel",
  "Abyss_19": "Basin Broken Vessel Grub",
  "Abyss_20": "Basin Simple Key",
  "Abyss_21": "Basin Monarch Wings",
  "Abyss_22": "Basin Hidden Station",
  "Abyss_06_Core": "Abyss Core",
  "Abyss_08": "Abyss Lifeblood Core",
  "Abyss_09": "Abyss Lighthouse Climb",
  "Abyss_10": "Abyss Shade Cloak",
  "Abyss_12": "Abyss Shriek",
  "Abyss_15": "Abyss Birthplace",
  "Abyss_16": "Abyss Corridor to Lighthouse",
  "Abyss_Lighthouse_room": "Abyss Lighthouse",
  "Crossroads_46b": "Grounds Tram",
  "Crossroads_50": "Grounds Blue Lake",
  "RestingGrounds_02": "Grounds Xero",
  "RestingGrounds_04": "Grounds Dream Nail Entrance",
  "RestingGrounds_05": "Grounds Whispering Root",
  "RestingGrounds_06": "Grounds Corridor Below Xero",
  "RestingGrounds_07": "Grounds Seer",
  "RestingGrounds_08": "Grounds Spirit's Glade",
  "RestingGrounds_09": "Grounds Stag",
  "RestingGrounds_10": "Grounds Crypts",
  "RestingGrounds_12": "Grounds Outside Grey Mourner",
  "RestingGrounds_17": "Grounds Dreamshield",
  "Room_Mansion": "Grounds Grey Mourner",
  "Ruins2_10": "Grounds Elevator",
  "Abyss_03_c": "Edge Tram",
  "Deepnest_East_01": "Edge Left Of Hive",
  "Deepnest_East_02": "Edge Above Hive",
  "Deepnest_East_03": "Edge Entrance",
  "Deepnest_East_04": "Edge Bardoon",
  "Deepnest_East_06": "Edge Outside Oro",
  "Deepnest_East_07": "Edge Whispering Root",
  "Deepnest_East_08": "Edge Great Hopper Idol",
  "Deepnest_East_09": "Edge Corridor Outside Colosseum",
  "Deepnest_East_10": "Edge Markoth Arena",
  "Deepnest_East_11": "Edge Below Camp Bench",
  "Deepnest_East_12": "Edge Hornet Sentinel Corridor",
  "Deepnest_East_13": "Edge Camp Bench",
  "Deepnest_East_14": "Edge Below Oro",
  "Deepnest_East_14b": "Edge Quick Slash",
  "Deepnest_East_15": "Edge Lifeblood",
  "Deepnest_East_16": "Edge Oro Scarecrow",
  "Deepnest_East_17": "Edge 420 Geo Rock",
  "Deepnest_East_18": "Edge Outside Markoth",
  "Deepnest_East_Hornet": "Edge Hornet Sentinel Arena",
  "GG_Lurker": "Edge Pale Lurker",
  "Room_Colosseum_01": "Edge Colo Entrance",
  "Room_Colosseum_02": "Edge Colo Bench",
  "Room_Colosseum_Bronze": "Edge Colo 1 Arena",
  "Room_Colosseum_Gold": "Edge Colo 3 Arena",
  "Room_Colosseum_Silver": "Edge Colo 2 Arena",
  "Room_Colosseum_Spectate": "Edge Colo Spectate",
  "Room_nailmaster_03": "Edge Oro",
  "Room_Wyrm": "Edge Cast-Off Shell",
  "Abyss_01": "City Broken Elevator",
  "Crossroads_49b": "City Left Elevator",
  "Room_nailsmith": "City Nailsmith",
  "Ruins_Bathhouse": "City Pleasure House Bench",
  "Ruins_Elevator": "City Pleasure House Elevator",
  "Ruins_House_01": "City Guarded Grub",
  "Ruins_House_02": "City Gorgeous Husk",
  "Ruins_House_03": "City Emilitia",
  "Ruins1_01": "City Pilgrim's Entrance",
  "Ruins1_02": "City Quirrel Bench",
  "Ruins1_03": "City Rafters",
  "Ruins1_04": "City Outside Nailsmith",
  "Ruins1_05": "City Grub Above Lemm",
  "Ruins1_05b": "City Lemm",
  "Ruins1_05c": "City Egg Above Lemm",
  "Ruins1_06": "City Corridor to Storerooms",
  "Ruins1_09": "City Soul Twister Arena",
  "Ruins1_17": "City Whispering Root",
  "Ruins1_18": "City Corridor to Spire",
  "Ruins1_23": "City Sanctum Entrance",
  "Ruins1_24": "City Soul Master Arena",
  "Ruins1_25": "City Sanctum East Elevators",
  "Ruins1_27": "City Hollow Knight Fountain",
  "Ruins1_28": "City Storerooms",
  "Ruins1_29": "City Storerooms Stag",
  "Ruins1_30": "City Sanctum Spell Twister",
  "Ruins1_31": "City Toll Bench",
  "Ruins1_31b": "City Shade Soul Arena",
  "Ruins1_32": "City Soul Master Rewards",
  "Ruins2_01": "City Spire Second Floor",
  "Ruins2_01_b": "City Spire First Floor",
  "Ruins2_03": "City Spire Fourth Floor",
  "Ruins2_03b": "City Spire Third Floor",
  "Ruins2_04": "City Right Hub",
  "Ruins2_05": "City Above King's",
  "Ruins2_06": "City King's Station",
  "Ruins2_07": "City Grub Below King's",
  "Ruins2_08": "City King's Stag",
  "Ruins2_09": "City King's Vessel Fragment",
  "Ruins2_10b": "City Right Elevator",
  "Ruins2_11": "City Collector Arena",
  "Ruins2_11_b": "City Tower of Love",
  "Ruins2_Watcher_Room": "City Lurien Elevator",
  "Hive_01": "Hive Entrance",
  "Hive_02": "Hive Whispering Root",
  "Hive_03": "Hive Outside Grub",
  "Hive_03_c": "Hive Outside Shortcut",
  "Hive_04": "Hive Mask Shard",
  "Hive_05": "Hive Knight Arena",
  "GG_Pipeway": "Waterways Flukemunga Corridor",
  "GG_Waterways": "Waterways Junk Pit",
  "Room_GG_Shortcut": "Waterways Fluke Hermit",
  "Waterways_01": "Waterways Entrance",
  "Waterways_02": "Waterways Main Bench",
  "Waterways_03": "Waterways Tuk",
  "Waterways_04": "Waterways Hidden Grub",
  "Waterways_04b": "Waterways Mask Shard",
  "Waterways_05": "Waterways Dung Defender Arena",
  "Waterways_06": "Waterways Corridor to Broken Elevator",
  "Waterways_07": "Waterways Left of Isma's Grove",
  "Waterways_08": "Waterways Outside Flukemarm",
  "Waterways_09": "Waterways Cornifer",
  "Waterways_12": "Waterways Flukemarm Arena",
  "Waterways_13": "Waterways Isma's Grove",
  "Waterways_14": "Waterways Edge Acid Corridor",
  "Waterways_15": "Waterways Dung Defender's Cave",
  "Abyss_03_b": "Deepnest Tram",
  "Deepnest_01b": "Deepnest Upper Cornifer",
  "Deepnest_02": "Deepnest Outside Mimics",
  "Deepnest_03": "Deepnest Left of Hot Spring",
  "Deepnest_09": "Deepnest Distant Village Stag",
  "Deepnest_10": "Deepnest Distant Village",
  "Deepnest_14": "Deepnest Failed Tramway Bench",
  "Deepnest_16": "Deepnest After Lower Cornifer",
  "Deepnest_17": "Deepnest Garpede Corridor Below Cornifer",
  "Deepnest_26": "Deepnest Failed Tramway Lifeblood",
  "Deepnest_26b": "Deepnest Tram Pass",
  "Deepnest_30": "Deepnest Hot Spring",
  "Deepnest_31": "Deepnest Nosk Corridor",
  "Deepnest_32": "Deepnest Nosk Arena",
  "Deepnest_33": "Deepnest Zote Arena",
  "Deepnest_34": "Deepnest First Devout",
  "Deepnest_35": "Deepnest Outside Galien",
  "Deepnest_36": "Deepnest Mimics",
  "Deepnest_37": "Deepnest Corridor to Tram",
  "Deepnest_38": "Deepnest Vessel Fragment",
  "Deepnest_39": "Deepnest Whispering Root",
  "Deepnest_40": "Deepnest Galien Arena",
  "Deepnest_41": "Deepnest Midwife",
  "Deepnest_42": "Deepnest Outside Mask Maker",
  "Deepnest_44": "Deepnest Sharp Shadow",
  "Deepnest_45_v02": "Deepnest Weaver's Den",
  "Deepnest_Spider_Town": "Deepnest Beast's Den",
  "Fungus2_25": "Deepnest Lower Cornifer",
  "Room_Mask_Maker": "Deepnest Mask Maker",
  "Room_spider_small": "Deepnest Brumm",
  "Deepnest_43": "Gardens Corridor To Deepnest",
  "Fungus1_23": "Gardens First Loodle Corridor",
  "Fungus1_24": "Gardens Cornifer",
  "Fungus3_04": "Gardens Before Petra Arena",
  "Fungus3_05": "Gardens Petra Arena",
  "Fungus3_08": "Gardens Lower Petra Corridor",
  "Fungus3_10": "Gardens Main Arena",
  "Fungus3_11": "Gardens Whispering Root",
  "Fungus3_13": "Gardens Outside Stag",
  "Fungus3_21": "Gardens Corridor to Traitor Lord",
  "Fungus3_22": "Gardens Upper Grub",
  "Fungus3_23": "Gardens Traitor Lord Arena",
  "Fungus3_34": "Gardens Entrance",
  "Fungus3_39": "Gardens Moss Prophet",
  "Fungus3_49": "Gardens Traitor's Child's Grave",
  "Fungus3_40": "Gardens Gardens Stag",
  "Fungus3_48": "Gardens Outside White Lady",
  "Fungus3_50": "Gardens Toll Bench",
  "Room_Queen": "Gardens White Lady",
  "White_Palace_01": "Palace Entrance",
  "White_Palace_02": "Palace First Mold",
  "White_Palace_03_hub": "Palace Hub",
  "White_Palace_04": "Palace Left of Hub",
  "White_Palace_05": "Palace Saw Room",
  "White_Palace_06": "Palace Balcony",
  "White_Palace_07": "Palace Lamp Pogo",
  "White_Palace_08": "Palace Workshop",
  "White_Palace_09": "Palace Throne",
  "White_Palace_11": "Palace Outside",
  "White_Palace_12": "Palace Spike Drop",
  "White_Palace_13": "Palace Thorn Jump",
  "White_Palace_14": "Palace Hell Corridor",
  "White_Palace_15": "Palace Caged Lever",
  "White_Palace_16": "Palace Saw Climb",
  "White_Palace_17": "POP Lever",
  "White_Palace_18": "POP Entrance",
  "White_Palace_19": "POP Vertical",
  "White_Palace_20": "POP Final",
  "Dream_Final_Boss": "Temple of the Black Egg: Radiance",
  "Room_Final_Boss_Atrium": "Temple of the Black Egg: Bench",
  "Room_Final_Boss_Core": "Temple of the Black Egg: Hollow Knight",
  "Grimm_Divine": "Grimm Divine",
  "Grimm_Main_Tent": "Grimm Tent",
  "Grimm_Nightmare": "Dream: Nightmare King",
  "Dream_01_False_Knight": "Dream: Failed Champion",
  "Dream_02_Mage_Lord": "Dream: Soul Tyrant",
  "Dream_03_Infected_Knight": "Dream: Lost Kin",
  "Dream_04_White_Defender": "Dream: White Defender",
  "Dream_Abyss": "Dream: Abyss",
  "Dream_Backer_Shrine": "Dream: Outside Shrine of Believers",
  "Dream_Guardian_Hegemol": "Dream: Herrah",
  "Dream_Guardian_Lurien": "Dream: Lurien",
  "Dream_Guardian_Monomon": "Dream: Monomon",
  "Dream_Mighty_Zote": "Dream: Grey Prince Zote",
  "Dream_Nailcollection": "Dream: Nail",
  "Dream_Room_Believer_Shrine": "Dream: Shrine of Believers",
  "GG_Atrium": "Godhome: Atrium",
  "GG_Atrium_Roof": "Godhome: Roof",
  "GG_Blue_Room": "Godhome: Lifeblood",
  "GG_Land_Of_Storms": "Godhome: Land of Storms",
  "GG_Mighty_Zote": "Godhome: Zote Eternal Ordeal",
  "GG_Unlock_Wastes": "Godhome: Godtuner",
  "GG_Workshop": "Godhome: Hall of Gods"
};

export default MAP;