/* codded by raashii
reedited by shahid-devil
use this git under copyright
dont change credit
*/

const Shazz= require('../events');
const config = require('../config');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const hrs = new Date().getHours({ timeZone: 'Asia/Kolkata' })

Shazz.addCommand({pattern: 'assist', fromMe: false, desc: 'it send bot menu'}, (async (message, match) => {

    var r_text = new Array ();
    
    
        r_text[0] = "https://images.wallpaperscraft.com/image/trees_pines_lake_198439_4480x6720.jpg";
        r_text[1] = "https://images.wallpaperscraft.com/image/trees_pines_mountains_160486_3648x5472.jpg";
        r_text[2] = "https://images.wallpaperscraft.com/image/trees_pines_path_155613_5504x8256.jpg";
        r_text[3] = "https://images.wallpaperscraft.com/image/trees_pines_sky_196842_2667x4000.jpg";
        r_text[4] = "https://images.wallpaperscraft.com/image/rain_crowd_silhouettes_137826_4000x6000.jpg";
        r_text[5] = "https://images.wallpaperscraft.com/image/night_city_aerial_view_buildings_198434_1350x2400.jpg";
        r_text[6] = "https://images.wallpaperscraft.com/image/night_city_aerial_view_buildings_194665_1350x2400.jpg";
        r_text[7] = "https://images.wallpaperscraft.com/image/night_city_aerial_view_buildings_147623_1350x2400.jpg";
        r_text[8] = "https://images.wallpaperscraft.com/image/night_city_aerial_view_buildings_195654_1350x2400.jpg";
        r_text[9] = "https://images.wallpaperscraft.com/image/glasses_hood_equipment_165388_3435x4668.jpg";
        r_text[10] = "https://images.wallpaperscraft.com/image/glasses_notebook_pen_189578_6144x4098.jpg";
        r_text[11] = "https://images.wallpaperscraft.com/image/glasses_portrait_aviator_162002_5600x3172.jpg";
        r_text[12] = "https://images.wallpaperscraft.com/image/ford_mustang_nissan_gtr_cars_198306_3264x4928.jpg";
        r_text[13] = "https://images.wallpaperscraft.com/image/ford_mustang_ford_cars_traffic_road_99460_2048x1420.jpg";
        r_text[14] = "https://images.wallpaperscraft.com/image/ford_mustang_car_blue_194991_2832x4240.jpg";
        r_text[15] = "https://images.wallpaperscraft.com/image/nebula_stars_space_198413_2160x2160.jpg";
        r_text[16] = "https://images.wallpaperscraft.com/image/nebula_stars_space_189356_5150x3648.jpg";
        r_text[17] = "https://images.wallpaperscraft.com/image/neon_light_long_exposure_198397_4000x6000.jpg";
        r_text[18] = "https://images.wallpaperscraft.com/image/house_mountains_trees_198408_2160x3840.jpg";
        r_text[19] = "https://images.wallpaperscraft.com/image/tower_skyscraper_architecture_198391_2160x3840.jpg";
        r_text[20] = "https://images.wallpaperscraft.com/image/tower_skyscraper_backlight_124786_2160x3840.jpg";
        r_text[21] = "https://images.wallpaperscraft.com/image/tower_skyscraper_architecture_135204_2160x3840.jpg";
        r_text[22] = "https://images.wallpaperscraft.com/image/snow_trees_house_155516_2160x3840.jpg";
        r_text[23] = "https://images.wallpaperscraft.com/image/snow_mountains_peaks_160678_2160x3840.jpg";
        r_text[24] = "https://images.wallpaperscraft.com/image/snow_sun_landscape_147124_2160x3840.jpg";
        r_text[25] = "https://images.wallpaperscraft.com/image/snow_branches_winter_134689_2160x3840.jpg";
        r_text[26] = "https://images.wallpaperscraft.com/image/girl_space_anime_160127_2160x3840.jpg";
        r_text[27] = "https://images.wallpaperscraft.com/image/girl_anime_hat_178724_2160x3840.jpg";
        r_text[28] = "https://images.wallpaperscraft.com/image/girl_umbrella_anime_141156_2160x3840.jpg";
        r_text[29] = "https://images.wallpaperscraft.com/image/silhouette_starry_sky_pillars_134464_2160x3840.jpg";
        r_text[30] = "https://images.wallpaperscraft.com/image/silhouette_starry_sky_dark_165822_2160x3840.jpg";
        r_text[31] = "https://images.wallpaperscraft.com/image/silhouette_starry_sky_stargazing_139774_2160x3840.jpg";
        r_text[32] = "https://images.wallpaperscraft.com/image/face_mitt_inscription_bye_114113_6000x4000.jpg";
        r_text[33] = "https://images.wallpaperscraft.com/image/face_paint_profile_abstraction_95073_1920x1080.jpg";
        r_text[34] = "https://images.wallpaperscraft.com/image/face_paint_lips_burst_dark_61870_2560x1440.jpg";
        r_text[35] = "https://images.wallpaperscraft.com/image/hologram_shimmering_colorful_198479_1350x2400.jpg";
        r_text[36] = "https://images.wallpaperscraft.com/image/cave_puddle_reflection_198472_1350x2400.jpg";
        r_text[37] = "https://images.wallpaperscraft.com/image/cave_rock_darkness_169378_1350x2400.jpg";
        r_text[38] = "https://images.wallpaperscraft.com/image/cave_rock_light_151228_1350x2400.jpg";
        r_text[39] = "https://images.wallpaperscraft.com/image/cave_rock_stones_158178_1350x2400.jpg";
        r_text[40] = "https://images.wallpaperscraft.com/image/cyborg_mask_neon_161237_3840x2160.jpg";
        r_text[41] = "https://images.wallpaperscraft.com/image/anonymous_mask_hood_198441_1350x2400.jpg";
        r_text[42] = "https://images.wallpaperscraft.com/image/anonymous_mask_hood_157796_1350x2400.jpg";
        r_text[43] = "https://images.wallpaperscraft.com/image/anonymous_mask_hood_144336_1350x2400.jpg";
        r_text[44] = "https://images.wallpaperscraft.com/image/anonymous_mask_hood_140068_1350x2400.jpg";
        r_text[45] = "https://images.wallpaperscraft.com/image/ball_planet_colorful_132216_1440x2560.jpg";
        r_text[46] = "https://images.wallpaperscraft.com/image/ball_planet_silhouette_149189_1440x2560.jpg";
        r_text[47] = "https://images.wallpaperscraft.com/image/ball_planet_hands_131055_1440x2560.jpg";
        r_text[48] = "https://images.wallpaperscraft.com/image/ball_planet_shroud_136916_1440x2560.jpg";
        r_text[49] = "https://images.wallpaperscraft.com/image/ball_glow_hand_190683_1440x2560.jpg";
        r_text[50] = "https://images.wallpaperscraft.com/image/ball_hands_glow_166373_1440x2560.jpg";
        r_text[51] = "https://images.wallpaperscraft.com/image/ball_glow_mask_140903_1440x2560.jpg";
        r_text[52] = "https://images.wallpaperscraft.com/image/ball_glow_stone_169306_1440x2560.jpg";
        r_text[53] = "https://images.wallpaperscraft.com/image/ball_glow_reflection_165921_4072x2697.jpg";
        r_text[54] = "https://images.wallpaperscraft.com/image/ball_glow_silhouette_149491_1920x2304.jpg";
        r_text[55] = "https://images.wallpaperscraft.com/image/ball_glow_line_light_28298_1680x1050.jpg";
        r_text[56] = "https://images.wallpaperscraft.com/image/ball_circles_glow_168614_1440x2560.jpg";
        r_text[57] = "https://images.wallpaperscraft.com/image/ball_circles_neon_137700_1440x2560.jpg";
        r_text[58] = "https://images.wallpaperscraft.com/image/ball_neon_backlight_147061_1440x2560.jpg";
        r_text[59] = "https://images.wallpaperscraft.com/image/ball_reflection_neon_168932_1440x2560.jpg";
        r_text[60] = "https://images.wallpaperscraft.com/image/ball_reflection_hand_184546_1440x2560.jpg";
        r_text[61] = "https://images.wallpaperscraft.com/image/crystal_ball_ball_hand_142442_1440x2560.jpg";
        r_text[62] = "https://images.wallpaperscraft.com/image/building_water_minimalism_198457_3145x4718.jpg";
        r_text[63] = "https://images.wallpaperscraft.com/image/triangle_inverted_black_white_92770_2560x1600.jpg";
        r_text[64] = "https://images.wallpaperscraft.com/image/lamp_electricity_minimalism_128251_1440x2560.jpg";
        r_text[65] = "https://images.wallpaperscraft.com/image/lamp_electricity_spiral_luminescence_120309_1440x2560.jpg";
        r_text[66] = "https://images.wallpaperscraft.com/image/lamp_spiral_electricity_light_119929_1440x2560.jpg";
        r_text[67] = "https://images.wallpaperscraft.com/image/skyscraper_building_architecture_sky_bottom_view_118409_1440x2560.jpg";
        r_text[68] = "https://images.wallpaperscraft.com/image/skyscraper_bottom_view_building_187222_1440x2560.jpg";
        r_text[69] = "https://images.wallpaperscraft.com/image/skyscraper_architecture_bottom_view_123571_1440x2560.jpg";
        r_text[70] = "https://images.wallpaperscraft.com/image/skyscraper_architecture_bottom_view_136419_1440x2560.jpg";
        r_text[71] = "https://images.wallpaperscraft.com/image/cherries_cherry_berry_122190_1440x2560.jpg";
        r_text[72] = "https://images.wallpaperscraft.com/image/water_hand_sea_horizon_118181_1440x2560.jpg";
        r_text[73] = "https://images.wallpaperscraft.com/image/water_hand_stones_148518_1440x2560.jpg";
        r_text[74] = "https://images.wallpaperscraft.com/image/water_stream_flow_169694_1440x2560.jpg";
        r_text[75] = "https://images.wallpaperscraft.com/image/water_horizon_dusk_175987_1440x2560.jpg";
        r_text[76] = "https://images.wallpaperscraft.com/image/water_moon_dusk_191709_1440x2560.jpg";
        r_text[77] = "https://images.wallpaperscraft.com/image/water_horizon_sky_164418_1440x2560.jpg";
        r_text[78] = "https://images.wallpaperscraft.com/image/water_sky_horizon_140454_1440x2560.jpg";
        r_text[79] = "https://images.wallpaperscraft.com/image/water_horizon_sunset_168843_1440x2560.jpg";
        r_text[80] = "https://images.wallpaperscraft.com/image/moon_phases_black_175210_3648x5472.jpg";
        r_text[81] = "https://images.wallpaperscraft.com/image/moon_black_sky_191125_2318x2864.jpg";
        r_text[82] = "https://images.wallpaperscraft.com/image/stains_paint_mixing_198500_2160x3840.jpg";
        r_text[83] = "https://images.wallpaperscraft.com/image/stains_paint_mixing_195514_2160x3840.jpg";
        r_text[84] = "https://images.wallpaperscraft.com/image/stains_liquid_paint_191590_2160x3840.jpg";
        r_text[85] = "https://images.wallpaperscraft.com/image/stains_liquid_paint_147522_2160x3840.jpg";
        r_text[86] = "https://images.wallpaperscraft.com/image/stains_liquid_paint_151928_2160x3840.jpg";
        r_text[87] = "https://images.wallpaperscraft.com/image/stains_abstraction_texture_157950_2160x3840.jpg";
        r_text[88] = "https://images.wallpaperscraft.com/image/stains_paint_liquid_146393_2160x3840.jpg";
        r_text[89] = "https://images.wallpaperscraft.com/image/girl_helmet_cyberpunk_194603_2160x3840.jpg";
        r_text[90] = "https://images.wallpaperscraft.com/image/girl_alone_autumn_192003_2160x3840.jpg";
        r_text[91] = "https://images.wallpaperscraft.com/image/girl_loneliness_alone_183388_2160x3840.jpg";
        r_text[92] = "https://images.wallpaperscraft.com/image/girl_silhouette_loneliness_177299_2160x3840.jpg";
        r_text[93] = "https://images.wallpaperscraft.com/image/car_glaciers_scifi_137640_1440x2560.jpg";
        r_text[94] = "https://images.wallpaperscraft.com/image/unicorn_wings_horse_125631_1440x2560.jpg";
        r_text[95] = "https://images.wallpaperscraft.com/image/surrealism_man_door_126312_1440x2560.jpg";
        r_text[96] = "https://images.wallpaperscraft.com/image/surrealism_astronaut_art_121819_1440x2560.jpg";
        r_text[97] = "https://images.wallpaperscraft.com/image/astronaut_giant_art_142663_1440x2560.jpg";
        r_text[98] = "https://images.wallpaperscraft.com/image/astronaut_spaceship_space_147409_1440x2560.jpg";
        r_text[99] = "https://images.wallpaperscraft.com/image/astronaut_cosmonaut_art_131212_1440x2560.jpg";
        r_text[100] = "https://images.wallpaperscraft.com/image/anonymous_mask_hood_140068_1350x2400.jpg";
        r_text[101] = "https://images.wallpaperscraft.com/image/moon_clouds_sky_198436_1600x1200.jpg";
        r_text[102] = "https://images.wallpaperscraft.com/image/moon_clouds_night_134255_1350x2400.jpg";
        r_text[103] = "https://images.wallpaperscraft.com/image/planet_clouds_light_star_94996_1280x1024.jpg";
        r_text[104] = "https://images.wallpaperscraft.com/image/couple_starry_sky_art_123338_1350x2400.jpg";
        r_text[105] = "https://images.wallpaperscraft.com/image/drops_dew_petal_90137_1280x1280.jpg";
        r_text[106] = "https://images.wallpaperscraft.com/image/wolf_silhouette_moon_night_118727_1280x1280.jpg";
        r_text[107] = "https://images.wallpaperscraft.com/image/wolf_moon_night_150508_3415x3415.jpg";
        r_text[108] = "https://images.wallpaperscraft.com/image/neon_lettering_rainbow_128663_3415x3415.jpg";
        r_text[109] = "https://images.wallpaperscraft.com/image/neon_lettering_rainbow_128663_3415x3415.jpg";
        r_text[110] = "https://images.wallpaperscraft.com/image/tree_planet_stars_galaxy_art_117068_2780x2780.jpg";
        r_text[111] = "https://images.wallpaperscraft.com/image/ball_fire_football_122318_3415x3415.jpg";
        r_text[112] = "https://images.wallpaperscraft.com/image/ball_texture_volume_196647_3415x3415.jpg";
        r_text[113] = "https://images.wallpaperscraft.com/image/keyboard_backlight_light_159518_1280x1280.jpg";
        r_text[114] = "https://images.wallpaperscraft.com/image/keyboard_key_backlight_128828_1350x2400.jpg";
        r_text[115] = "https://images.wallpaperscraft.com/image/headphones_keyboard_audio_129691_3415x3415.jpg";
        r_text[116] = "https://images.wallpaperscraft.com/image/cube_figure_dark_142157_1280x1280.jpg";
        r_text[117] = "https://images.wallpaperscraft.com/image/cat_eyes_blue_143433_1350x2400.jpg";
        r_text[118] = "https://images.wallpaperscraft.com/image/city_night_panorama_117682_3415x3415.jpg";
        r_text[119] = "https://images.wallpaperscraft.com/image/city_night_buildings_192988_3415x3415.jpg";
        r_text[120] = "https://images.wallpaperscraft.com/image/city_night_buildings_183963_3415x3415.jpg";
        r_text[121] = "https://images.wallpaperscraft.com/image/city_night_aerial_view_157260_3415x3415.jpg";
        r_text[122] = "https://images.wallpaperscraft.com/image/city_night_aerial_view_191587_3415x3415.jpg";
        r_text[123] = "https://images.wallpaperscraft.com/image/coffee_mug_chair_124443_2780x2780.jpg";
        r_text[124] = "https://images.wallpaperscraft.com/image/coffee_mug_hands_132301_2780x2780.jpg";
        r_text[125] = "https://images.wallpaperscraft.com/image/puppy_husky_down_cute_53643_1280x1280.jpg";
        r_text[126] = "https://images.wallpaperscraft.com/image/cat_lying_kitten_playful_91882_1024x768.jpg";
        r_text[127] = "https://images.wallpaperscraft.com/image/cat_lying_tongue_playful_glass_striped_26572_1280x1280.jpg";
        r_text[128] = "https://images.wallpaperscraft.com/image/match_fire_macro_198486_1280x1280.jpg";
        r_text[129] = "https://images.wallpaperscraft.com/image/match_smoke_macro_133503_3415x3415.jpg";
        r_text[130] = "https://images.wallpaperscraft.com/image/smoke_hood_silhouette_128612_3415x3415.jpg";
        r_text[131] = "https://images.wallpaperscraft.com/image/silhouette_hood_sunset_155194_3415x3415.jpg";
        r_text[132] = "https://images.wallpaperscraft.com/image/silhouette_sunset_dark_141637_3415x3415.jpg";
        r_text[133] = "https://images.wallpaperscraft.com/image/stairs_building_tower_198497_3415x3415.jpg";
        r_text[134] = "https://images.wallpaperscraft.com/image/forest_fog_trees_126479_3415x3415.jpg";
        r_text[135] = "https://images.wallpaperscraft.com/image/forest_fog_trees_173667_3415x3415.jpg";
        r_text[136] = "https://images.wallpaperscraft.com/image/tree_christmas_new_year_132207_3415x3415.jpg";
        r_text[137] = "https://images.wallpaperscraft.com/image/tree_decorations_balls_195401_3415x3415.jpg";
        r_text[138] = "https://images.wallpaperscraft.com/image/book_ring_heart_love_118982_3415x3415.jpg";
        r_text[139] = "https://images.wallpaperscraft.com/image/book_inscription_motivation_195284_3415x3415.jpg";
        r_text[140] = "https://images.wallpaperscraft.com/image/book_branch_dark_165540_3415x3415.jpg";
        r_text[141] = "https://images.wallpaperscraft.com/image/book_cup_coffee_155045_3415x3415.jpg";
        r_text[142] = "https://images.wallpaperscraft.com/image/book_bouquet_cup_147482_3415x3415.jpg";
        r_text[143] = "https://images.wallpaperscraft.com/image/glass_lemon_spray_122158_1350x2400.jpg";
        r_text[144] = "https://images.wallpaperscraft.com/image/glass_drops_spray_162357_1350x2400.jpg";
        r_text[145] = "https://images.wallpaperscraft.com/image/glass_drops_macro_195219_1350x2400.jpg";
        r_text[146] = "https://images.wallpaperscraft.com/image/snowflake_pattern_structure_ice_119262_1350x2400.jpg";
        r_text[147] = "https://images.wallpaperscraft.com/image/snowflake_macro_pattern_162125_1350x2400.jpg";
        r_text[148] = "https://images.wallpaperscraft.com/image/snowflake_decoration_white_196180_1350x2400.jpg";
        r_text[149] = "https://images.wallpaperscraft.com/image/couple_hands_love_tenderness_coffee_118921_3415x3415.jpg";
        r_text[150] = "https://images.wallpaperscraft.com/image/couple_kiss_tenderness_135381_3415x3415.jpg";
        r_text[151] = "https://images.wallpaperscraft.com/image/couple_kiss_romance_love_116829_3415x3415.jpg";
        r_text[152] = "https://images.wallpaperscraft.com/image/motorcyclist_motorcycle_sunset_121025_1280x1280.jpg";
        r_text[153] = "https://images.wallpaperscraft.com/image/motorcyclist_motorcycle_helmet_186641_1280x1280.jpg";
        r_text[154] = "https://images.wallpaperscraft.com/image/motorcyclist_motorcycle_helmet_171640_1280x1280.jpg";
        r_text[155] = "https://images.wallpaperscraft.com/image/headphones_books_education_121501_3415x3415.jpg";
        r_text[156] = "https://images.wallpaperscraft.com/image/headphones_metallic_silver_139878_3415x3415.jpg";
        r_text[157] = "https://images.wallpaperscraft.com/image/ship_sea_sunset_moon_63381_1600x1200.jpg";
        r_text[158] = "https://images.wallpaperscraft.com/image/ship_mast_sunset_sea_116168_1600x1200.jpg";
        r_text[159] = "https://images.wallpaperscraft.com/image/ship_sun_sunset_165669_1600x1200.jpg";
        r_text[160] = "https://images.wallpaperscraft.com/image/ship_sunset_spray_168736_2780x2780.jpg";
        r_text[161] = "https://images.wallpaperscraft.com/image/ship_sea_sunset_shore_115026_2780x2780.jpg";
        r_text[162] = "https://images.wallpaperscraft.com/image/smile_inscription_hand_hello_118043_3415x3415.jpg";
        r_text[163] = "https://images.wallpaperscraft.com/image/smile_smiley_ball_184348_3415x3415.jpg";
        r_text[164] = "https://images.wallpaperscraft.com/image/smile_happiness_ball_125063_3415x3415.jpg";
        r_text[165] = "https://images.wallpaperscraft.com/image/flower_pink_petals_bud_close_up_119905_1280x1280.jpg";
        r_text[166] = "https://images.wallpaperscraft.com/image/rose_flower_close_up_petals_119252_3415x3415.jpg";
        r_text[167] = "https://images.wallpaperscraft.com/image/rose_flower_petals_179553_3415x3415.jpg";
        r_text[168] = "https://images.wallpaperscraft.com/image/rose_flower_red_150623_3415x3415.jpg";
        r_text[169] = "https://images.wallpaperscraft.com/image/rose_flower_red_148978_3415x3415.jpg";
        r_text[170] = "https://images.wallpaperscraft.com/image/unicorn_water_forest_night_magic_68838_1280x1280.jpg";
        r_text[171] = "https://images.wallpaperscraft.com/image/forest_water_spruce_163253_1280x1280.jpg";
        r_text[172] = "https://images.wallpaperscraft.com/image/deer_planet_art_129712_1280x1280.jpg";
        r_text[173] = "https://images.wallpaperscraft.com/image/deer_art_wildlife_121850_1280x1280.jpg";
        r_text[174] = "https://images.wallpaperscraft.com/image/car_sports_car_neon_157154_1280x1280.jpg";
        r_text[175] = "https://images.wallpaperscraft.com/image/car_sportscar_neon_156622_1280x1280.jpg";
        r_text[176] = "https://images.wallpaperscraft.com/image/car_sportscar_road_156718_1600x1200.jpg";
        r_text[177] = "https://images.wallpaperscraft.com/image/lane_night_dark_139408_2780x2780.jpg";
        r_text[178] = "https://images.wallpaperscraft.com/image/night_moon_dark_146181_2780x2780.jpg";
        r_text[179] = "https://images.wallpaperscraft.com/image/ladder_purple_light_118353_1350x2400.jpg";
        r_text[180] = "https://images.wallpaperscraft.com/image/ladder_forest_bamboo_195758_1350x2400.jpg";
        r_text[181] = "https://images.wallpaperscraft.com/image/pluto_planet_dwarf_planet_trans_neptunian_objects_news_97479_1400x1050.jpg";
        r_text[182] = "https://images.wallpaperscraft.com/image/snowboarding_trick_jump_snow_99047_1280x1280.jpg";
        r_text[183] = "https://images.wallpaperscraft.com/image/snowboarding_snowboarder_mountain_snow_slope_110491_1280x1280.jpg";
        r_text[184] = "https://images.wallpaperscraft.com/image/hologram_scheme_scifi_139294_2780x2780.jpg";
        r_text[185] = "https://images.wallpaperscraft.com/image/night_city_buildings_aerial_view_198465_3415x3415.jpg";
        r_text[186] = "https://images.wallpaperscraft.com/image/night_city_buildings_aerial_view_156134_3415x3415.jpg";
        r_text[187] = "https://images.wallpaperscraft.com/image/night_city_buildings_aerial_view_151198_3415x3415.jpg";
        r_text[188] = "https://images.wallpaperscraft.com/image/ladybug_drop_surface_106249_1280x1280.jpg";
        r_text[189] = "https://images.wallpaperscraft.com/image/ladybug_grass_macro_190135_1280x1280.jpg";
        r_text[190] = "https://images.wallpaperscraft.com/image/coffee_grill_cup_110673_3415x3415.jpg";
        r_text[191] = "https://images.wallpaperscraft.com/image/coffee_cup_spoons_191170_3415x3415.jpg";
        r_text[192] = "https://images.wallpaperscraft.com/image/train_subway_underground_120794_3415x3415.jpg";
        r_text[193] = "https://images.wallpaperscraft.com/image/train_railway_buildings_175616_3415x3415.jpg";
        r_text[194] = "https://images.wallpaperscraft.com/image/train_railway_forest_169685_3415x3415.jpg";
        r_text[195] = "https://images.wallpaperscraft.com/image/cosmonaut_space_suit_multicolored_123724_2780x2780.jpg";
        r_text[196] = "https://images.wallpaperscraft.com/image/city_art_retrowave_143233_1280x1280.jpg";
        r_text[197] = "https://images.wallpaperscraft.com/image/city_art_sky_127834_1280x1280.jpg";
        r_text[198] = "https://images.wallpaperscraft.com/image/city_fantasy_art_140441_1280x1280.jpg";
        r_text[199] = "https://images.wallpaperscraft.com/image/city_architecture_buildings_191290_1280x1280.jpg";
        r_text[200] = "https://images.wallpaperscraft.com/image/city_road_cars_185798_1280x1280.jpg";
        r_text[201] = "https://images.wallpaperscraft.com/image/aquilegia_flower_pink_198372_1350x2400.jpg";
        r_text[202] = "https://images.wallpaperscraft.com/image/ice_drop_macro_198291_1350x2400.jpg";
        r_text[203] = "https://images.wallpaperscraft.com/image/plant_succulent_leaves_198231_1350x2400.jpg";
        r_text[204] = "https://images.wallpaperscraft.com/image/bike_cyclist_spray_194016_1350x2400.jpg";
        r_text[205] = "https://images.wallpaperscraft.com/image/football_field_aerial_view_football_196247_1350x2400.jpg";
        r_text[206] = "https://images.wallpaperscraft.com/image/surfer_surfing_water_193190_1350x2400.jpg";
        r_text[207] = "https://images.wallpaperscraft.com/image/basketball_basketball_backboard_net_186633_1350x2400.jpg";
        r_text[208] = "https://images.wallpaperscraft.com/image/surfing_waves_sea_178352_1350x2400.jpg";
        r_text[209] = "https://images.wallpaperscraft.com/image/brick_wall_wall_red_177161_1350x2400.jpg";
        r_text[210] = "https://images.wallpaperscraft.com/image/snowboarder_snowboard_slope_175058_1350x2400.jpg";
        r_text[211] = "https://images.wallpaperscraft.com/image/bicycle_tourist_cyclist_176697_1350x2400.jpg";
        r_text[212] = "https://images.wallpaperscraft.com/image/construction_concrete_architecture_198318_1350x2400.jpg";
        r_text[213] = "https://images.wallpaperscraft.com/image/waves_sand_surface_198035_1350x2400.jpg";
        r_text[214] = "https://images.wallpaperscraft.com/image/wall_brick_white_197530_1350x2400.jpg";
        r_text[215] = "https://images.wallpaperscraft.com/image/laptop_backlight_colorful_194324_1350x2400.jpg";
        r_text[216] = "https://images.wallpaperscraft.com/image/mask_totem_smoke_192795_1350x2400.jpg";
        r_text[217] = "https://images.wallpaperscraft.com/image/code_programming_text_169456_1350x2400.jpg";
        r_text[218] = "https://images.wallpaperscraft.com/image/code_text_programming_146694_1350x2400.jpg";
        r_text[219] = "https://images.wallpaperscraft.com/image/air_balloon_smiley_smile_156188_1350x2400.jpg";
        r_text[220] = "https://images.wallpaperscraft.com/image/balloon_smiley_smile_126654_1350x2400.jpg";
        r_text[221] = "https://images.wallpaperscraft.com/image/balloon_heart_ball_174468_1350x2400.jpg";
        r_text[222] = "https://images.wallpaperscraft.com/image/smile_smiley_sad_156138_1350x2400.jpg";
        r_text[223] = "https://images.wallpaperscraft.com/image/heart_love_colorful_183687_1350x2400.jpg";
        r_text[224] = "https://images.wallpaperscraft.com/image/love_silhouette_fireworks_178667_1350x2400.jpg";
        r_text[225] = "https://images.wallpaperscraft.com/image/silhouette_sunset_birds_145330_1350x2400.jpg";
        r_text[226] = "https://images.wallpaperscraft.com/image/silhouette_love_sunset_174077_1350x2400.jpg";
        r_text[227] = "https://images.wallpaperscraft.com/image/twilight_evening_snow_135246_1350x2400.jpg";
        r_text[228] = "https://images.wallpaperscraft.com/image/twilight_dark_moon_147499_1350x2400.jpg";
        r_text[229] = "https://images.wallpaperscraft.com/image/fireworks_night_mountains_198047_1350x2400.jpg";
        r_text[230] = "https://images.wallpaperscraft.com/image/fireworks_sparks_red_197506_1350x2400.jpg";
        r_text[231] = "https://images.wallpaperscraft.com/image/fireworks_salute_sparks_137774_1350x2400.jpg";
        r_text[232] = "https://images.wallpaperscraft.com/image/fireworks_sparks_colorful_196732_1350x2400.jpg";
        r_text[233] = "https://images.wallpaperscraft.com/image/fireworks_sparks_colorful_196102_1350x2400.jpg";
        r_text[234] = "https://images.wallpaperscraft.com/image/fireworks_sparks_holiday_135883_1350x2400.jpg";
        r_text[235] = "https://images.wallpaperscraft.com/image/fireworks_sparks_yellow_197597_1350x2400.jpg";
        r_text[236] = "https://images.wallpaperscraft.com/image/mugs_hot_chocolate_marshmallow_198277_1350x2400.jpg";
        r_text[237] = "https://images.wallpaperscraft.com/image/mugs_tea_camping_123511_1350x2400.jpg";
        r_text[238] = "https://images.wallpaperscraft.com/image/camping_bonfire_firewood_176339_1350x2400.jpg";
        r_text[239] = "https://images.wallpaperscraft.com/image/camping_tent_forest_186906_1350x2400.jpg";
        r_text[240] = "https://images.wallpaperscraft.com/image/acoustic_guitar_guitar_musical_instrument_198075_1350x2400.jpg";
        r_text[241] = "https://images.wallpaperscraft.com/image/guitar_musical_instrument_neon_196631_1350x2400.jpg";
        r_text[242] = "https://images.wallpaperscraft.com/image/speakers_speaker_music_196514_1350x2400.jpg";
        r_text[243] = "https://images.wallpaperscraft.com/image/anime_schoolgirl_uniform_120955_1080x1920.jpg";
        r_text[244] = "https://images.wallpaperscraft.com/image/anime_girl_leaves_162517_1080x1920.jpg";
        r_text[245] = "https://images.wallpaperscraft.com/image/girl_anime_wind_188165_1080x1920.jpg";
        r_text[246] = "https://images.wallpaperscraft.com/image/girl_anime_guitar_184800_1080x1920.jpg";
        r_text[247] = "https://images.wallpaperscraft.com/image/buildings_river_snow_198357_1350x2400.jpg";
        r_text[248] = "https://images.wallpaperscraft.com/image/ferris_wheel_buildings_skyscrapers_198273_1350x2400.jpg";
        r_text[249] = "https://images.wallpaperscraft.com/image/plane_trail_sky_197126_1350x2400.jpg";
        r_text[250] = "https://images.wallpaperscraft.com/image/arrow_pointer_wall_196731_1350x2400.jpg";
        r_text[251] = "https://images.wallpaperscraft.com/image/tower_building_architecture_196271_1350x2400.jpg";
        r_text[252] = "https://images.wallpaperscraft.com/image/exit_sign_text_198303_1350x2400.jpg";
        r_text[253] = "https://images.wallpaperscraft.com/image/text_neon_word_197314_1350x2400.jpg";
        r_text[254] = "https://images.wallpaperscraft.com/image/text_neon_red_197382_1350x2400.jpg";
        r_text[255] = "https://images.wallpaperscraft.com/image/text_neon_glow_154000_1350x2400.jpg";
        r_text[256] = "https://images.wallpaperscraft.com/image/lines_light_long_exposure_198464_1350x2400.jpg";
        r_text[257] = "https://images.wallpaperscraft.com/image/ripples_distortion_glitch_198376_1350x2400.jpg";
        r_text[258] = "https://images.wallpaperscraft.com/image/glare_circles_bokeh_196930_1350x2400.jpg";
        r_text[259] = "https://images.wallpaperscraft.com/image/glare_drops_glass_184778_1350x2400.jpg";
        r_text[260] = "https://images.wallpaperscraft.com/image/glare_bokeh_glass_135378_1350x2400.jpg";
        r_text[261] = "https://images.wallpaperscraft.com/image/glare_drops_glass_182121_1350x2400.jpg";
        r_text[262] = "https://images.wallpaperscraft.com/image/paint_glitter_glow_198154_1350x2400.jpg";
        r_text[263] = "https://images.wallpaperscraft.com/image/neon_light_lines_198013_1350x2400.jpg";
        r_text[264] = "https://images.wallpaperscraft.com/image/paint_stains_spots_197765_1350x2400.jpg";
        r_text[265] = "https://images.wallpaperscraft.com/image/paint_liquid_stains_197801_1350x2400.jpg";
        r_text[266] = "https://images.wallpaperscraft.com/image/waves_blur_distortion_197664_1350x2400.jpg";
        r_text[267] = "https://images.wallpaperscraft.com/image/light_blur_long_exposure_197601_1350x2400.jpg";
        r_text[268] = "https://images.wallpaperscraft.com/image/paint_stains_colorful_197490_1350x2400.jpg";
        r_text[269] = "https://images.wallpaperscraft.com/image/lines_light_long_exposure_197743_1350x2400.jpg";
        r_text[270] = "https://images.wallpaperscraft.com/image/fractal_kaleidoscope_abstraction_197190_1350x2400.jpg";
        r_text[271] = "https://images.wallpaperscraft.com/image/fractal_kaleidoscope_symmetry_145575_1350x2400.jpg";
        r_text[272] = "https://images.wallpaperscraft.com/image/fractal_kaleidoscope_symmetry_143804_1350x2400.jpg";
        r_text[273] = "https://images.wallpaperscraft.com/image/stains_paint_mixing_197137_1350x2400.jpg";
        r_text[274] = "https://images.wallpaperscraft.com/image/girl_outfit_hat_188185_1350x2400.jpg";
        r_text[275] = "https://images.wallpaperscraft.com/image/girl_shell_hare_167320_1350x2400.jpg";
        r_text[276] = "https://images.wallpaperscraft.com/image/piano_silhouette_space_156662_1350x2400.jpg";
        r_text[277] = "https://images.wallpaperscraft.com/image/girl_umbrella_rain_151317_1350x2400.jpg";
        r_text[278] = "https://images.wallpaperscraft.com/image/girl_bike_night_140306_1350x2400.jpg";
        r_text[279] = "https://images.wallpaperscraft.com/image/girl_kitten_flower_141058_1350x2400.jpg";
        r_text[280] = "https://images.wallpaperscraft.com/image/guy_anime_computer_tears_sadness_room_96990_1350x2400.jpg";
        r_text[281] = "https://images.wallpaperscraft.com/image/girl_silhouette_water_143788_1350x2400.jpg";
        r_text[282] = "https://images.wallpaperscraft.com/image/girl_silhouette_flame_188312_1350x2400.jpg";
        r_text[283] = "https://images.wallpaperscraft.com/image/girl_silhouette_dark_158863_1350x2400.jpg";
        r_text[284] = "https://images.wallpaperscraft.com/image/girl_silhouette_cave_188345_1350x2400.jpg";
        r_text[285] = "https://images.wallpaperscraft.com/image/girl_silhouette_sunset_181444_1350x2400.jpg";
        r_text[286] = "https://images.wallpaperscraft.com/image/girl_silhouette_balloon_161854_1350x2400.jpg";
        r_text[287] = "https://images.wallpaperscraft.com/image/girl_silhouette_tree_198492_1350x2400.jpg";
        r_text[288] = "https://images.wallpaperscraft.com/image/girl_tree_alone_184155_1350x2400.jpg";
        r_text[289] = "https://images.wallpaperscraft.com/image/girl_cat_art_120828_1350x2400.jpg";
        r_text[290] = "https://images.wallpaperscraft.com/image/girl_art_cat_132215_1350x2400.jpg";
        r_text[291] = "https://images.wallpaperscraft.com/image/girl_art_hair_135305_1350x2400.jpg";
        r_text[292] = "https://images.wallpaperscraft.com/image/girl_hat_hair_188730_1350x2400.jpg";
        r_text[293] = "https://images.wallpaperscraft.com/image/girl_hat_grass_163162_1350x2400.jpg";
        r_text[294] = "https://images.wallpaperscraft.com/image/girl_grass_field_179538_1350x2400.jpg";
        r_text[295] = "https://images.wallpaperscraft.com/image/girl_lights_grass_163914_1350x2400.jpg";
        r_text[296] = "https://images.wallpaperscraft.com/image/girl_field_wind_122296_1350x2400.jpg";
        r_text[297] = "https://images.wallpaperscraft.com/image/lines_stripes_black_195706_1350x2400.jpg";
        r_text[298] = "https://images.wallpaperscraft.com/image/lines_stripes_neon_174447_1350x2400.jpg";
        r_text[299] = "https://images.wallpaperscraft.com/image/lines_stripes_neon_175902_1350x2400.jpg";
        r_text[300] = "https://images.wallpaperscraft.com/image/lines_neon_glow_155236_1350x2400.jpg";
        r_text[301] = "https://images.wallpaperscraft.com/image/lines_stripes_glow_173235_1350x2400.jpg";
        r_text[302] = "https://images.wallpaperscraft.com/image/lines_stripes_neon_136043_1350x2400.jpg";
        r_text[303] = "https://images.wallpaperscraft.com/image/circles_rotation_red_136932_1350x2400.jpg";
        r_text[304] = "https://images.wallpaperscraft.com/image/circles_rotation_shadow_background_46830_1350x2400.jpg";
        r_text[305] = "https://images.wallpaperscraft.com/image/circles_rotation_immersion_124444_1350x2400.jpg";
        r_text[306] = "https://images.wallpaperscraft.com/image/universe_galaxy_multicolored_125246_1350x2400.jpg";
        r_text[307] = "https://images.wallpaperscraft.com/image/galaxy_universe_stars_132413_1350x2400.jpg";
        r_text[308] = "https://images.wallpaperscraft.com/image/galaxy_universe_stars_186396_1350x2400.jpg";
        r_text[309] = "https://images.wallpaperscraft.com/image/galaxy_stars_space_183942_1350x2400.jpg";
        r_text[310] = "https://images.wallpaperscraft.com/image/escalator_stairs_legs_198435_1350x2400.jpg";
        r_text[311] = "https://images.wallpaperscraft.com/image/escalator_stairs_room_169068_1350x2400.jpg";
        r_text[312] = "https://images.wallpaperscraft.com/image/escalator_stairs_steps_186414_1350x2400.jpg";
        r_text[313] = "https://images.wallpaperscraft.com/image/escalator_stairs_room_134388_1350x2400.jpg";
        r_text[314] = "https://images.wallpaperscraft.com/image/airplane_forest_aerial_view_198311_1350x2400.jpg";
        r_text[315] = "https://images.wallpaperscraft.com/image/forest_trees_aerial_view_172673_1350x2400.jpg";
        r_text[316] = "https://images.wallpaperscraft.com/image/forest_trees_aerial_view_151178_1350x2400.jpg";
        r_text[317] = "https://images.wallpaperscraft.com/image/kayak_boat_aerial_view_198191_1350x2400.jpg";
        r_text[318] = "https://images.wallpaperscraft.com/image/boat_kayak_sea_173969_1350x2400.jpg";
        r_text[319] = "https://images.wallpaperscraft.com/image/boat_sea_beach_171745_1350x2400.jpg";
        r_text[320] = "https://images.wallpaperscraft.com/image/sea_beach_boat_144603_1350x2400.jpg";
        r_text[321] = "https://images.wallpaperscraft.com/image/boat_beach_sea_175079_1350x2400.jpg";
        r_text[322] = "https://images.wallpaperscraft.com/image/boat_sea_sunset_water_shine_118003_1350x2400.jpg";
        r_text[323] = "https://images.wallpaperscraft.com/image/boat_sunset_sea_182192_1350x2400.jpg";
        r_text[324] = "https://images.wallpaperscraft.com/image/boat_sea_ocean_130523_1350x2400.jpg";
        r_text[325] = "https://images.wallpaperscraft.com/image/boat_sea_sky_170282_1350x2400.jpg";
        r_text[326] = "https://images.wallpaperscraft.com/image/boat_sea_ocean_130523_1350x2400.jpg";
        r_text[327] = "https://images.wallpaperscraft.com/image/lamp_floor_lamp_grass_198123_1350x2400.jpg";
        r_text[328] = "https://images.wallpaperscraft.com/image/lamp_bw_black_185439_1350x2400.jpg";
        r_text[329] = "https://images.wallpaperscraft.com/image/lamp_blinds_bw_188003_1350x2400.jpg";
        r_text[330] = "https://images.wallpaperscraft.com/image/lamp_sparks_glow_179141_1350x2400.jpg";
        r_text[331] = "https://images.wallpaperscraft.com/image/lamp_glow_dark_187450_1350x2400.jpg";
        r_text[332] = "https://images.wallpaperscraft.com/image/lamp_glow_dark_186870_1350x2400.jpg";
        r_text[333] = "https://images.wallpaperscraft.com/image/lamp_glow_neon_183277_1350x2400.jpg";
        r_text[334] = "https://images.wallpaperscraft.com/image/lamp_neon_glow_182840_1350x2400.jpg";
        r_text[335] = "https://images.wallpaperscraft.com/image/lamp_glow_neon_179705_1350x2400.jpg";
        r_text[336] = "https://images.wallpaperscraft.com/image/lamp_glow_wall_166063_1350x2400.jpg";
        r_text[337] = "https://images.wallpaperscraft.com/image/lamp_glow_leaves_176525_1350x2400.jpg";
        r_text[338] = "https://images.wallpaperscraft.com/image/lamp_neon_glow_178661_1350x2400.jpg";
        r_text[339] = "https://images.wallpaperscraft.com/image/man_loneliness_ferris_wheel_197976_1350x2400.jpg";
        r_text[340] = "https://images.wallpaperscraft.com/image/man_alone_loneliness_184162_1350x2400.jpg";
        r_text[341] = "https://images.wallpaperscraft.com/image/man_loneliness_lonely_186593_1350x2400.jpg";
        r_text[342] = "https://images.wallpaperscraft.com/image/man_loneliness_alone_180150_1350x2400.jpg";
        r_text[343] = "https://images.wallpaperscraft.com/image/man_loneliness_alone_179285_1350x2400.jpg";
        r_text[344] = "https://images.wallpaperscraft.com/image/man_loneliness_alone_186784_1350x2400.jpg";
        r_text[345] = "https://images.wallpaperscraft.com/image/leaf_neon_palm_130066_1350x2400.jpg";
        r_text[346] = "https://images.wallpaperscraft.com/image/car_neon_movement_129990_1350x2400.jpg";
        r_text[347] = "https://images.wallpaperscraft.com/image/car_retro_art_137996_1350x2400.jpg";
        r_text[348] = "https://images.wallpaperscraft.com/image/car_retro_salon_183431_1350x2400.jpg";
        r_text[349] = "https://images.wallpaperscraft.com/image/car_retro_vintage_194425_1350x2400.jpg";
        r_text[350] = "https://images.wallpaperscraft.com/image/car_retro_vintage_180160_1350x2400.jpg";
        r_text[351] = "https://images.wallpaperscraft.com/image/car_mirror_neon_164703_1350x2400.jpg";
        r_text[352] = "https://images.wallpaperscraft.com/image/car_mirror_dark_148206_1350x2400.jpg";
        r_text[353] = "https://images.wallpaperscraft.com/image/car_dark_art_141424_1350x2400.jpg";
        r_text[354] = "https://images.wallpaperscraft.com/image/car_lights_road_168747_1350x2400.jpg";
        r_text[355] = "https://images.wallpaperscraft.com/image/silhouette_cube_neon_131106_1350x2400.jpg";
        r_text[356] = "https://images.wallpaperscraft.com/image/silhouette_neon_glow_140485_1350x2400.jpg";
        r_text[357] = "https://images.wallpaperscraft.com/image/silhouette_glow_passage_168375_1350x2400.jpg";
        r_text[358] = "https://images.wallpaperscraft.com/image/silhouette_ball_glow_140012_1350x2400.jpg";
        r_text[359] = "https://images.wallpaperscraft.com/image/silhouette_ruins_glow_194911_1350x2400.jpg";
        r_text[360] = "https://images.wallpaperscraft.com/image/silhouette_rings_glow_152207_1350x2400.jpg";
        r_text[361] = "https://images.wallpaperscraft.com/image/silhouette_forest_glow_151315_1350x2400.jpg";
        r_text[362] = "https://images.wallpaperscraft.com/image/silhouette_light_spiral_148257_1350x2400.jpg";
        r_text[363] = "https://images.wallpaperscraft.com/image/silhouette_light_sparks_158018_1350x2400.jpg";
        r_text[364] = "https://images.wallpaperscraft.com/image/silhouette_rain_light_130814_1350x2400.jpg";
        r_text[365] = "https://images.wallpaperscraft.com/image/silhouette_rain_loneliness_126652_1350x2400.jpg";
        r_text[366] = "https://images.wallpaperscraft.com/image/silhouette_loneliness_alone_188833_1350x2400.jpg";
        r_text[367] = "https://images.wallpaperscraft.com/image/silhouette_loneliness_art_139903_1350x2400.jpg";
        r_text[368] = "https://images.wallpaperscraft.com/image/silhouette_evening_loneliness_139734_1350x2400.jpg";
        r_text[369] = "https://images.wallpaperscraft.com/image/silhouette_sea_sunset_131899_1350x2400.jpg";
        r_text[370] = "https://images.wallpaperscraft.com/image/silhouette_sea_man_122577_1350x2400.jpg";
        r_text[371] = "https://images.wallpaperscraft.com/image/silhouette_sea_sunset_131996_1350x2400.jpg";
        r_text[372] = "https://images.wallpaperscraft.com/image/silhouette_sea_sunset_131096_1350x2400.jpg";
        r_text[373] = "https://images.wallpaperscraft.com/image/silhouette_sea_sunset_123444_1350x2400.jpg";
        r_text[374] = "https://images.wallpaperscraft.com/image/silhouette_umbrella_loneliness_129903_1350x2400.jpg";
        r_text[375] = "https://images.wallpaperscraft.com/image/silhouette_loneliness_alone_178665_1350x2400.jpg";
        r_text[376] = "https://images.wallpaperscraft.com/image/bridge_road_buildings_198628_1080x1920.jpg";
        r_text[377] = "https://images.wallpaperscraft.com/image/bridge_road_night_149250_1080x1920.jpg";
        r_text[378] = "https://images.wallpaperscraft.com/image/bridge_road_city_177485_1080x1920.jpg";
        r_text[379] = "https://images.wallpaperscraft.com/image/bridge_road_trees_landscape_87106_1080x1920.jpg";
        r_text[380] = "https://images.wallpaperscraft.com/image/field_trees_snow_198625_1440x2560.jpg";
        r_text[381] = "https://images.wallpaperscraft.com/image/field_trees_winter_156237_1440x2560.jpg";
        r_text[382] = "https://images.wallpaperscraft.com/image/field_trees_landscape_86249_1440x2560.jpg";
        r_text[383] = "https://images.wallpaperscraft.com/image/starry_sky_trees_stars_198613_1440x2560.jpg";
        r_text[384] = "https://images.wallpaperscraft.com/image/eye_pupil_macro_198610_1440x2560.jpg";
        r_text[385] = "https://images.wallpaperscraft.com/image/eye_pupil_eyelashes_174969_1440x2560.jpg";
        r_text[386] = "https://images.wallpaperscraft.com/image/eye_pupil_macro_153593_1440x2560.jpg";
        r_text[387] = "https://images.wallpaperscraft.com/image/flowers_berries_branches_198606_1440x2560.jpg";
        r_text[388] = "https://images.wallpaperscraft.com/image/silhouette_alone_northern_lights_198622_1440x2560.jpg";
        r_text[389] = "https://images.wallpaperscraft.com/image/silhouette_alone_sad_158329_1440x2560.jpg";
        r_text[390] = "https://images.wallpaperscraft.com/image/silhouette_alone_beach_158676_1440x2560.jpg";
        r_text[391] = "https://images.wallpaperscraft.com/image/silhouette_alone_sea_196773_1440x2560.jpg";
        r_text[392] = "https://images.wallpaperscraft.com/image/window_smoke_dark_198627_1440x2560.jpg";
        r_text[393] = "https://images.wallpaperscraft.com/image/window_dark_eyes_133034_1440x2560.jpg";
        r_text[394] = "https://images.wallpaperscraft.com/image/window_branches_dark_165733_1440x2560.jpg";
        r_text[395] = "https://images.wallpaperscraft.com/image/window_ivy_leaves_181003_1440x2560.jpg";
        r_text[396] = "https://images.wallpaperscraft.com/image/stains_liquid_paint_198596_1440x2560.jpg";
        r_text[397] = "https://images.wallpaperscraft.com/image/buildings_city_boat_198584_1440x2560.jpg";
        r_text[398] = "https://images.wallpaperscraft.com/image/buildings_city_canal_193837_1440x2560.jpg";
        r_text[399] = "https://images.wallpaperscraft.com/image/buildings_city_ferris_wheel_178120_1440x2560.jpg";
        r_text[400] = "https://images.wallpaperscraft.com/image/buildings_city_horizon_177629_1440x2560.jpg";
        r_text[401] = "https://images.wallpaperscraft.com/image/hearts_origami_paper_198867_1440x2560.jpg";
        r_text[402] = "https://images.wallpaperscraft.com/image/hearts_light_abstraction_157234_1440x2560.jpg";
        r_text[403] = "https://images.wallpaperscraft.com/image/hearts_heart_brick_128782_1440x2560.jpg";
        r_text[404] = "https://images.wallpaperscraft.com/image/girl_tablet_hug_151592_1440x2560.jpg";
        r_text[405] = "https://images.wallpaperscraft.com/image/girl_anime_red_121164_1440x2560.jpg";
        r_text[406] = "https://images.wallpaperscraft.com/image/girl_anime_wings_121613_1440x2560.jpg";
        r_text[407] = "https://images.wallpaperscraft.com/image/girl_anime_smile_136718_1440x2560.jpg";
        r_text[408] = "https://images.wallpaperscraft.com/image/couple_kiss_art_131855_1440x2560.jpg";
        r_text[409] = "https://images.wallpaperscraft.com/image/gardener_anime_guy_123347_1440x2560.jpg";
        r_text[410] = "https://images.wallpaperscraft.com/image/pyramid_ufo_aliens_138737_1440x2560.jpg";
        r_text[411] = "https://images.wallpaperscraft.com/image/silhouette_space_scifi_137307_1440x2560.jpg";
        r_text[412] = "https://images.wallpaperscraft.com/image/bird_fantastic_flight_136785_1440x2560.jpg";
        r_text[413] = "https://images.wallpaperscraft.com/image/dragon_starry_sky_silhouette_133014_1440x2560.jpg";
        r_text[414] = "https://images.wallpaperscraft.com/image/skull_island_mystical_124574_1440x2560.jpg";
        r_text[415] = "https://images.wallpaperscraft.com/image/child_costume_elephant_125371_1440x2560.jpg";
        r_text[416] = "https://images.wallpaperscraft.com/image/dragon_fantasy_art_feathers_98978_1440x2560.jpg";
        r_text[417] = "https://images.wallpaperscraft.com/image/mountains_building_engine_122249_1440x2560.jpg";
        r_text[418] = "https://images.wallpaperscraft.com/image/robots_mechanisms_premises_flame_67034_1440x2560.jpg";
        r_text[419] = "https://images.wallpaperscraft.com/image/robots_cyborg_cyberpunk_152655_1440x2560.jpg";
        r_text[420] = "https://images.wallpaperscraft.com/image/robots_cyborgs_futurism_125441_1440x2560.jpg";
        r_text[421] = "https://images.wallpaperscraft.com/image/wormhole_art_visualization_128753_1440x2560.jpg";
        r_text[422] = "https://images.wallpaperscraft.com/image/futurism_art_skyscrapers_121444_1440x2560.jpg";
        r_text[423] = "https://images.wallpaperscraft.com/image/futurism_future_ball_161311_1440x2560.jpg";
        r_text[424] = "https://images.wallpaperscraft.com/image/future_inscription_text_188673_1440x2560.jpg";
        r_text[425] = "https://images.wallpaperscraft.com/image/future_fantasy_meteorite_179431_1440x2560.jpg";
        r_text[426] = "https://images.wallpaperscraft.com/image/future_glitch_equipment_165261_1440x2560.jpg";
        r_text[427] = "https://images.wallpaperscraft.com/image/future_neon_city_164284_1440x2560.jpg";
        r_text[428] = "https://images.wallpaperscraft.com/image/future_airship_art_166849_1440x2560.jpg";
        r_text[429] = "https://images.wallpaperscraft.com/image/city_night_people_198178_1440x2560.jpg";
        r_text[430] = "https://images.wallpaperscraft.com/image/city_art_cyberpunk_136314_1440x2560.jpg";
        r_text[431] = "https://images.wallpaperscraft.com/image/city_silhouette_art_136751_1440x2560.jpg";
        r_text[432] = "https://images.wallpaperscraft.com/image/city_night_signboard_190660_1440x2560.jpg";
        r_text[433] = "https://images.wallpaperscraft.com/image/city_night_buildings_192988_1440x2560.jpg";
        r_text[434] = "https://images.wallpaperscraft.com/image/city_buildings_architecture_141514_1440x2560.jpg";
        r_text[435] = "https://images.wallpaperscraft.com/image/rock_station_fantasy_197621_1440x2560.jpg";
        r_text[436] = "https://images.wallpaperscraft.com/image/rock_storm_ship_170135_1440x2560.jpg";
        r_text[437] = "https://images.wallpaperscraft.com/image/rock_stone_relief_180239_1440x2560.jpg";
        r_text[438] = "https://images.wallpaperscraft.com/image/rock_stone_nebula_180607_1440x2560.jpg";
        r_text[439] = "https://images.wallpaperscraft.com/image/surface_relief_lines_198566_1440x2560.jpg";
        r_text[440] = "https://images.wallpaperscraft.com/image/railway_tunnel_speed_198565_1440x2560.jpg";
        r_text[441] = "https://images.wallpaperscraft.com/image/railway_light_speed_126633_1440x2560.jpg";
        r_text[442] = "https://images.wallpaperscraft.com/image/railway_rails_station_177675_1440x2560.jpg";
        r_text[443] = "https://images.wallpaperscraft.com/image/whales_water_underwater_195191_1440x2560.jpg";
        r_text[444] = "https://images.wallpaperscraft.com/image/birds_night_art_195388_1440x2560.jpg";
        r_text[445] = "https://images.wallpaperscraft.com/image/rocks_sharp_abstraction_168415_1440x2560.jpg";
        r_text[446] = "https://images.wallpaperscraft.com/image/metal_iron_metallic_171129_1440x2560.jpg";
        r_text[447] = "https://images.wallpaperscraft.com/image/balls_spheres_3d_140601_1440x2560.jpg";
        r_text[448] = "https://images.wallpaperscraft.com/image/balls_spheres_fractal_140689_1440x2560.jpg";
        r_text[449] = "https://images.wallpaperscraft.com/image/balls_three-colored_surface_cubic_15042_1440x2560.jpg";
        r_text[450] = "https://images.wallpaperscraft.com/image/lighthouse_building_sea_193142_1350x2400.jpg";
        r_text[451] = "https://images.wallpaperscraft.com/image/glow_cave_trees_166789_1350x2400.jpg";
        r_text[452] = "https://images.wallpaperscraft.com/image/glow_sparks_lines_176998_1350x2400.jpg";
        r_text[453] = "https://images.wallpaperscraft.com/image/glow_lines_rays_178768_1350x2400.jpg";
        r_text[454] = "https://images.wallpaperscraft.com/image/glow_shine_light_143808_1350x2400.jpg";
        r_text[455] = "https://images.wallpaperscraft.com/image/glow_colorful_nebula_179569_1350x2400.jpg";
        r_text[456] = "https://images.wallpaperscraft.com/image/glow_colorful_bright_141459_1350x2400.jpg";
        r_text[457] = "https://images.wallpaperscraft.com/image/stripes_glow_bright_141320_1350x2400.jpg";
        r_text[458] = "https://images.wallpaperscraft.com/image/question_mark_symbol_neon_197443_1350x2400.jpg";
        r_text[459] = "https://images.wallpaperscraft.com/image/text_neon_dark_154438_1350x2400.jpg";
        r_text[460] = "https://images.wallpaperscraft.com/image/text_neon_light_192409_1350x2400.jpg";
        r_text[461] = "https://images.wallpaperscraft.com/image/moon_night_sky_194399_1350x2400.jpg";
        r_text[462] = "https://images.wallpaperscraft.com/image/moon_black_sky_191125_1350x2400.jpg";
        r_text[463] = "https://images.wallpaperscraft.com/image/heart_garlands_decoration_193198_1350x2400.jpg";
        r_text[464] = "https://images.wallpaperscraft.com/image/shape_neon_black_190383_1350x2400.jpg";
        r_text[465] = "https://images.wallpaperscraft.com/image/shape_glow_blue_136037_1350x2400.jpg";
        r_text[466] = "https://images.wallpaperscraft.com/image/shape_glow_compounds_135467_1350x2400.jpg";
        r_text[467] = "https://images.wallpaperscraft.com/image/figure_symbols_glow_141143_1350x2400.jpg";
        r_text[468] = "https://images.wallpaperscraft.com/image/shape_convex_volumetric_162082_1350x2400.jpg";
        r_text[469] = "https://images.wallpaperscraft.com/image/shape_line_convex_136457_1350x2400.jpg";
        r_text[470] = "https://images.wallpaperscraft.com/image/shape_3d_volume_150572_1350x2400.jpg";
        r_text[471] = "https://images.wallpaperscraft.com/image/shape_pipes_lines_3d_115200_1350x2400.jpg";
        r_text[472] = "https://images.wallpaperscraft.com/image/shape_volume_convex_155268_1350x2400.jpg";
        r_text[473] = "https://images.wallpaperscraft.com/image/volume_circles_multicolored_170811_1350x2400.jpg";
        r_text[474] = "https://images.wallpaperscraft.com/image/volume_figure_square_162305_1350x2400.jpg";
        r_text[475] = "https://images.wallpaperscraft.com/image/figure_structure_tangled_150548_1350x2400.jpg";
        r_text[476] = "https://images.wallpaperscraft.com/image/figure_toy_carrot_eyes_118150_1350x2400.jpg";
        r_text[477] = "https://images.wallpaperscraft.com/image/figure_pattern_glow_168301_1350x2400.jpg";
        r_text[478] = "https://images.wallpaperscraft.com/image/figure_3d_fractal_149664_1350x2400.jpg";
        r_text[479] = "https://images.wallpaperscraft.com/image/figure_faces_tree_168478_1350x2400.jpg";
        r_text[480] = "https://images.wallpaperscraft.com/image/macaw_parrot_bird_198636_1350x2400.jpg";
        r_text[481] = "https://images.wallpaperscraft.com/image/iguana_lizard_reptile_198450_1350x2400.jpg";
        r_text[482] = "https://images.wallpaperscraft.com/image/jellyfish_tentacles_creature_198329_1350x2400.jpg";
        r_text[483] = "https://images.wallpaperscraft.com/image/jellyfish_tentacles_blue_148180_1350x2400.jpg";
        r_text[484] = "https://images.wallpaperscraft.com/image/jellyfish_tentacles_water_150910_1350x2400.jpg";
        r_text[485] = "https://images.wallpaperscraft.com/image/tiger_animal_predator_198197_1350x2400.jpg";
        r_text[486] = "https://images.wallpaperscraft.com/image/kitten_cat_gray_198041_1350x2400.jpg";
        r_text[487] = "https://images.wallpaperscraft.com/image/kitten_cat_glance_145103_1350x2400.jpg";
        r_text[488] = "https://images.wallpaperscraft.com/image/kitten_cat_glance_146907_1350x2400.jpg";
        r_text[489] = "https://images.wallpaperscraft.com/image/kitten_cat_striped_146484_1350x2400.jpg";
        r_text[490] = "https://images.wallpaperscraft.com/image/kitten_cat_cute_167709_1350x2400.jpg";
        r_text[491] = "https://images.wallpaperscraft.com/image/kitten_cat_cute_173869_1350x2400.jpg";
        r_text[492] = "https://images.wallpaperscraft.com/image/kitten_cat_gray_151440_1350x2400.jpg";
        r_text[493] = "https://images.wallpaperscraft.com/image/kitten_cat_wild_144976_1350x2400.jpg";
        r_text[494] = "https://images.wallpaperscraft.com/image/kitten_cat_suitcase_136679_1350x2400.jpg";
        r_text[495] = "https://images.wallpaperscraft.com/image/lion_animal_predator_197099_1350x2400.jpg";
        r_text[496] = "https://images.wallpaperscraft.com/image/lynx_animal_big_cat_196951_1350x2400.jpg";
        r_text[497] = "https://images.wallpaperscraft.com/image/deer_field_mountain_196745_1350x2400.jpg";
        r_text[498] = "https://images.wallpaperscraft.com/image/deer_wildlife_horns_131368_1350x2400.jpg";
        r_text[499] = "https://images.wallpaperscraft.com/image/deer_horns_river_177643_1350x2400.jpg";
        r_text[500] = "https://images.wallpaperscraft.com/image/deer_horns_fantasy_170818_1350x2400.jpg";
        r_text[501] = "https://images.wallpaperscraft.com/image/deer_horns_buildings_176452_1350x2400.jpg";
        r_text[502] = "https://images.wallpaperscraft.com/image/deer_horns_moon_164191_1350x2400.jpg";
        r_text[503] = "https://images.wallpaperscraft.com/image/deer_moon_night_148852_1350x2400.jpg";
        r_text[504] = "https://images.wallpaperscraft.com/image/deer_winter_night_129602_1350x2400.jpg";
        r_text[505] = "https://images.wallpaperscraft.com/image/deer_trees_building_198364_1350x2400.jpg";
        r_text[506] = "https://images.wallpaperscraft.com/image/rocket_launch_space_164664_1350x2400.jpg";
        r_text[507] = "https://images.wallpaperscraft.com/image/rocket_launch_space_166388_1350x2400.jpg";
        r_text[508] = "https://images.wallpaperscraft.com/image/rocket_flight_space_station_123426_1350x2400.jpg";
        r_text[509] = "https://images.wallpaperscraft.com/image/rocket_flight_launch_162464_1350x2400.jpg";
        r_text[510] = "https://images.wallpaperscraft.com/image/rocket_smoke_night_146941_1350x2400.jpg";
        r_text[511] = "https://images.wallpaperscraft.com/image/rocket_smoke_trees_168954_1350x2400.jpg";
        r_text[512] = "https://images.wallpaperscraft.com/image/smoke_silhouette_fog_126092_1350x2400.jpg";
        r_text[513] = "https://images.wallpaperscraft.com/image/smoke_abstraction_colored_191797_1350x2400.jpg";
        r_text[514] = "https://images.wallpaperscraft.com/image/rock_fog_smoke_181643_1350x2400.jpg";
        r_text[515] = "https://images.wallpaperscraft.com/image/rock_cliff_fog_160987_1350x2400.jpg";
        r_text[516] = "https://images.wallpaperscraft.com/image/rock_cliff_man_136744_1350x2400.jpg";
        r_text[517] = "https://images.wallpaperscraft.com/image/rock_cliff_sea_163812_1350x2400.jpg";
        r_text[518] = "https://images.wallpaperscraft.com/image/glass_hand_water_lighting_114510_1350x2400.jpg";
        r_text[519] = "https://images.wallpaperscraft.com/image/glass_water_distortion_180588_1350x2400.jpg";
        r_text[520] = "https://images.wallpaperscraft.com/image/glass_water_macro_158367_1350x2400.jpg";
        r_text[521] = "https://images.wallpaperscraft.com/image/glass_water_drops_135669_1350x2400.jpg";
        r_text[522] = "https://images.wallpaperscraft.com/image/flower_petals_dark_116231_1350x2400.jpg";
        r_text[523] = "https://images.wallpaperscraft.com/image/flower_petals_bud_blue_118382_1350x2400.jpg";
        r_text[524] = "https://images.wallpaperscraft.com/image/flower_bud_petals_130420_1350x2400.jpg";
        r_text[525] = "https://images.wallpaperscraft.com/image/flower_petals_bud_close_up_113143_1350x2400.jpg";
        r_text[526] = "https://images.wallpaperscraft.com/image/plexus_dark_background_light_118228_1350x2400.jpg";
        r_text[527] = "https://images.wallpaperscraft.com/image/crows_wires_birds_118095_1350x2400.jpg";
        r_text[528] = "https://images.wallpaperscraft.com/image/crows_creepy_house_121792_1350x2400.jpg";
        r_text[529] = "https://images.wallpaperscraft.com/image/house_forest_fog_128777_1350x2400.jpg";
        r_text[530] = "https://images.wallpaperscraft.com/image/house_island_lake_169865_1350x2400.jpg";
        r_text[531] = "https://images.wallpaperscraft.com/image/house_lake_shore_187194_1350x2400.jpg";
        r_text[532] = "https://images.wallpaperscraft.com/image/house_glow_road_167522_1350x2400.jpg";
        r_text[533] = "https://images.wallpaperscraft.com/image/house_window_roof_186048_1350x2400.jpg";
        r_text[534] = "https://images.wallpaperscraft.com/image/house_building_spruce_181956_1350x2400.jpg";
        r_text[535] = "https://images.wallpaperscraft.com/image/house_building_trees_179476_1350x2400.jpg";
        r_text[536] = "https://images.wallpaperscraft.com/image/lava_texture_surface_140662_1350x2400.jpg";
        r_text[537] = "https://images.wallpaperscraft.com/image/lava_fiery_surface_131909_1350x2400.jpg";
        r_text[538] = "https://images.wallpaperscraft.com/image/volcano_lava_fiery_132776_1350x2400.jpg";
        r_text[539] = "https://images.wallpaperscraft.com/image/volcano_mountains_snowy_187231_1350x2400.jpg";
        r_text[540] = "https://images.wallpaperscraft.com/image/cyborg_zebra_lava_168664_1350x2400.jpg";
        r_text[541] = "https://images.wallpaperscraft.com/image/cyborg_robot_art_127334_1350x2400.jpg";
        r_text[542] = "https://images.wallpaperscraft.com/image/cyborg_cave_dark_158308_1350x2400.jpg";
        r_text[543] = "https://images.wallpaperscraft.com/image/laboratory_scifi_art_142310_1350x2400.jpg";
        r_text[544] = "https://images.wallpaperscraft.com/image/robot_art_scifi_141698_1350x2400.jpg";
        r_text[545] = "https://images.wallpaperscraft.com/image/robot_mask_wolf_146457_1350x2400.jpg";
        r_text[546] = "https://images.wallpaperscraft.com/image/robot_art_iron_141436_1350x2400.jpg";
        r_text[547] = "https://images.wallpaperscraft.com/image/robot_cyborg_rain_142115_1350x2400.jpg";
        r_text[548] = "https://images.wallpaperscraft.com/image/girl_rain_art_142414_1350x2400.jpg";
        r_text[549] = "https://images.wallpaperscraft.com/image/girl_umbrella_rain_147037_1350x2400.jpg";
        r_text[550] = "https://images.wallpaperscraft.com/image/girl_umbrella_building_125043_1350x2400.jpg";
        r_text[551] = "https://images.wallpaperscraft.com/image/paint_mixing_abstraction_199346_1350x2400.jpg";
        r_text[552] = "https://images.wallpaperscraft.com/image/bmw_x5_bmw_car_199321_1350x2400.jpg";
        r_text[553] = "https://images.wallpaperscraft.com/image/subaru_car_black_199313_1350x2400.jpg";
        r_text[554] = "https://images.wallpaperscraft.com/image/planet_saturn_space_184440_1350x2400.jpg";
        r_text[555] = "https://images.wallpaperscraft.com/image/planet_stars_space_163013_1350x2400.jpg";
        r_text[556] = "https://images.wallpaperscraft.com/image/planet_space_satellites_132279_1350x2400.jpg";
        r_text[557] = "https://images.wallpaperscraft.com/image/planet_earth_stars_133535_1350x2400.jpg";
        r_text[558] = "https://images.wallpaperscraft.com/image/planet_space_universe_123741_1350x2400.jpg";
        r_text[559] = "https://images.wallpaperscraft.com/image/planet_space_atmosphere_134309_1350x2400.jpg";
        r_text[560] = "https://images.wallpaperscraft.com/image/sky_cloud_atmosphere_198729_1350x2400.jpg";
        r_text[561] = "https://images.wallpaperscraft.com/image/sky_clouds_atmosphere_147235_1350x2400.jpg";
        r_text[562] = "https://images.wallpaperscraft.com/image/sky_clouds_moon_144483_1350x2400.jpg";
        r_text[563] = "https://images.wallpaperscraft.com/image/planet_shine_atmosphere_153949_1350x2400.jpg";
        r_text[564] = "https://images.wallpaperscraft.com/image/planet_flash_shine_145875_1350x2400.jpg";
        r_text[565] = "https://images.wallpaperscraft.com/image/planet_explosion_flash_154301_1350x2400.jpg";
        r_text[566] = "https://images.wallpaperscraft.com/image/explosion_flash_colorful_143441_1350x2400.jpg";
        r_text[567] = "https://images.wallpaperscraft.com/image/explosion_rays_fractal_colorful_109219_1350x2400.jpg";
        r_text[568] = "https://images.wallpaperscraft.com/image/flash_space_shards_139360_1350x2400.jpg";
        r_text[569] = "https://images.wallpaperscraft.com/image/flash_clouds_water_156459_1350x2400.jpg";
        r_text[570] = "https://images.wallpaperscraft.com/image/flash_sky_clouds_151221_1350x2400.jpg";
        r_text[571] = "https://images.wallpaperscraft.com/image/ships_sea_storm_explosion_65381_1350x2400.jpg";
        r_text[572] = "https://images.wallpaperscraft.com/image/colorful_bright_circles_texture_line_explosion_112154_1350x2400.jpg";
        r_text[573] = "https://images.wallpaperscraft.com/image/circles_colorful_spotted_139715_1350x2400.jpg";
        r_text[574] = "https://images.wallpaperscraft.com/image/circles_colorful_blurred_168617_1350x2400.jpg";
        r_text[575] = "https://images.wallpaperscraft.com/image/circles_colorful_wavy_124216_1350x2400.jpg";
        r_text[576] = "https://images.wallpaperscraft.com/image/circles_colorful_shine_139367_1350x2400.jpg";
        r_text[577] = "https://images.wallpaperscraft.com/image/circles_patterns_colorful_137786_1350x2400.jpg";
        r_text[578] = "https://images.wallpaperscraft.com/image/circles_patterns_green_rotation_118506_1350x2400.jpg";
        r_text[579] = "https://images.wallpaperscraft.com/image/circles_patterns_colorful_137470_1350x2400.jpg";
        r_text[580] = "https://images.wallpaperscraft.com/image/anime_friends_kids_127896_1350x2400.jpg";
        r_text[581] = "https://images.wallpaperscraft.com/image/magician_stairs_rain_151909_1350x2400.jpg";
        r_text[582] = "https://images.wallpaperscraft.com/image/magician_art_magic_128796_1350x2400.jpg";
        r_text[583] = "https://images.wallpaperscraft.com/image/masks_art_dark_130211_1350x2400.jpg";
        r_text[584] = "https://images.wallpaperscraft.com/image/masks_neon_blur_148099_1350x2400.jpg";
        r_text[585] = "https://images.wallpaperscraft.com/image/neon_glow_colorful_197782_1350x2400.jpg";
        r_text[586] = "https://images.wallpaperscraft.com/image/sky_art_dark_129628_1350x2400.jpg";
        r_text[587] = "https://images.wallpaperscraft.com/image/sky_night_comet_150850_1350x2400.jpg";
        r_text[588] = "https://images.wallpaperscraft.com/image/fox_rain_art_146090_1350x2400.jpg";
        r_text[589] = "https://images.wallpaperscraft.com/image/love_kiss_rain_168495_1350x2400.jpg";
        r_text[590] = "https://images.wallpaperscraft.com/image/love_heart_art_153384_1350x2400.jpg";
        r_text[591] = "https://images.wallpaperscraft.com/image/astronaut_spacesuit_sadness_173223_1350x2400.jpg";
        r_text[592] = "https://images.wallpaperscraft.com/image/astronaut_spacesuit_eye_170804_1350x2400.jpg";
        r_text[593] = "https://images.wallpaperscraft.com/image/guy_silhouette_sunset_118590_1350x2400.jpg";
        r_text[594] = "https://images.wallpaperscraft.com/image/guy_anime_art_122234_1350x2400.jpg";
        r_text[595] = "https://images.wallpaperscraft.com/image/light_bulb_edisons_lamp_electricity_140563_1350x2400.jpg";
        r_text[596] = "https://images.wallpaperscraft.com/image/ice_cranny_surface_196663_1350x2400.jpg";
        r_text[597] = "https://images.wallpaperscraft.com/image/ice_cracks_cranny_197093_1350x2400.jpg";
        r_text[598] = "https://images.wallpaperscraft.com/image/bicycle_art_cyclist_127132_1350x2400.jpg";
        r_text[599] = "https://images.wallpaperscraft.com/image/tower_taipei_art_127317_1350x2400.jpg";
        r_text[600] = "https://images.wallpaperscraft.com/image/monster_art_smile_127610_1350x2400.jpg";
        r_text[601] = "https://images.wallpaperscraft.com/image/boat_silhouettes_sea_127626_1350x2400.jpg";
        r_text[602] = "https://images.wallpaperscraft.com/image/eyes_doodles_art_127935_1350x2400.jpg";
        r_text[603] = "https://images.wallpaperscraft.com/image/deer_silhouette_light_127865_1350x2400.jpg";
        r_text[604] = "https://images.wallpaperscraft.com/image/moon_crescent_stars_127840_1350x2400.jpg";
        r_text[605] = "https://images.wallpaperscraft.com/image/child_art_loneliness_128042_1350x2400.jpg";
        r_text[606] = "https://images.wallpaperscraft.com/image/skull_cap_kerchief_128416_1350x2400.jpg";
        r_text[607] = "https://images.wallpaperscraft.com/image/plane_sky_art_129149_1350x2400.jpg";
        r_text[608] = "https://images.wallpaperscraft.com/image/fish_yin_and_yang_art_129551_1350x2400.jpg";
        r_text[609] = "https://images.wallpaperscraft.com/image/dinosaurs_art_reptiles_129430_1350x2400.jpg";
        r_text[610] = "https://images.wallpaperscraft.com/image/silhouette_sunset_transport_129400_1350x2400.jpg";
        r_text[611] = "https://images.wallpaperscraft.com/image/silhouette_street_art_140261_1350x2400.jpg";
        r_text[612] = "https://images.wallpaperscraft.com/image/skeleton_skull_mantle_130517_1350x2400.jpg";
        r_text[613] = "https://images.wallpaperscraft.com/image/astronaut_cosmonaut_art_131212_1350x2400.jpg";
        r_text[614] = "https://images.wallpaperscraft.com/image/flower_glow_ice_132381_1350x2400.jpg";
        r_text[615] = "https://images.wallpaperscraft.com/image/wolf_grin_predator_134162_1350x2400.jpg";
        r_text[616] = "https://images.wallpaperscraft.com/image/respirator_face_mask_133060_1350x2400.jpg";
        r_text[617] = "https://images.wallpaperscraft.com/image/face_grin_fangs_142734_1350x2400.jpg";
        r_text[618] = "https://images.wallpaperscraft.com/image/face_funny_art_141579_1350x2400.jpg";
        r_text[619] = "https://images.wallpaperscraft.com/image/face_surprise_emotions_141979_1350x2400.jpg";
        r_text[620] = "https://images.wallpaperscraft.com/image/smiley_emotions_minimalism_134124_1350x2400.jpg";
    
    var i = Math.floor(621*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    var time = new Date().toLocaleString('HI', { timeZone: 'Asia/Kolkata' }).split(' ')[1]

    var wish = ''
     
    var eva = ''

    var auto_bio = ''

    var language = ''

if (hrs < 12) wish = '*ɢᴏᴏᴅ ᴍᴏʀɴɪɴɢ ⛅*'
if (hrs >= 12 && hrs <= 17) wish = '*ɢᴏᴏᴅ ᴀғᴛᴇʀɴᴏᴏɴ 🌞*'
if (hrs >= 17 && hrs <= 19) wish = '*ɢᴏᴏᴅ ᴇᴠᴇɴɪɴɢ 🌥*'
if (hrs >= 19 && hrs <= 24) wish = '*ɢᴏᴏᴅ ɴɪɢʜᴛ 🌙*'

if (config.FULLEVA == 'true') eva = 'On'
if (config.FULLEVA == 'false') eva = 'Off'
if (config.AUTOBİO == 'true') auto_bio = 'On'
if (config.AUTOBİO == 'false') auto_bio = 'Off'

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.jpg, contextInfo: {mentionedJid: message.mention}, caption: `╭──────────────────╮
   ` + config.BOTPLK + `
╭──────────────────╯
│
│ ʜᴇʏ ᴜsᴇʀ ` + wish + `
│         *⌚` + time + `*
│
│ ▢ *ᴅᴇᴠᴇʟᴏʟᴇʀ* : ɪͥᴛͭsᷤ ᴍͫᴇͤ ᴄʏʙᴇʀ㊌ᴊᴀᴄᴋ
│ ▢ *ʙᴏᴛ* : Ammukutty
│ ▢ *ᴠᴇʀꜱɪᴏɴ* : 2.0.0
│ ▢ *ғᴜʟʟ ᴇᴠᴀ* : ` + eva + `
│ ▢ *ᴀᴜᴛᴏ ʙɪᴏ* : ` + auto_bio + `
│ ▢ *ᴍᴏᴅᴇ* : ᴘᴜʙʟɪᴄ
│ ▢ *ᴘʀᴇғɪx* : *# / . ; !*
│
│      ▎▍▌▌▉▏▎▌▉▐▏▌▎
│      ▎▍▌▌▉▏▎▌▉▐▏▌▎
│       ©917994922550
│
╰──────────────────╮
 ​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​ 
╭──────────────────╯
│ ◩ ᴍᴇɴᴜ ◪
╭──────────────────╯
│
│[ ᴍᴇᴅɪᴀ ]
│
│ ▢ .ꜱᴏɴɢ
│ ▢ .ᴠɪᴅᴇᴏ
│ ▢ .ɪɴꜱᴛᴀ
│ ▢ .ʏᴛ
│         
│[ ᴄᴏɴᴠᴇʀᴛ ]
│
│ ▢ .ɢɪғ
│ ▢ .ᴍᴘ3
│ ▢ .ᴛᴛꜱ
│ ▢ .ɪᴍɢ
│ ▢ .ꜱᴛɪᴄᴋᴇʀ
│ ▢ .ᴀᴛᴛᴘ
│ ▢ .ᴛᴛᴘ
│ ▢ .ᴘʜᴏᴛᴏ
│ ▢ .2ɪᴍɢ
│
│[ ᴍᴀᴋᴇʀ ]
│
│ ▢ .ғғᴘᴀᴄᴋ
│ ▢ .ᴍᴍᴘᴀᴄᴋ
│ ▢ .ᴍᴏʀᴇᴛxᴛ
│ ▢ .ᴛxᴛɪᴛ
│ ▢ .ᴍᴀᴋᴇʀᴍᴇɴᴜ
│ ▢ .ʟᴏɢᴏ
│ 
│[ ғᴜɴ ]
│
│ ▢ .ᴊᴏᴋᴇ
│ ▢ .ᴍᴇᴍᴇ
│ ▢ .ǫʀ
│ ▢ .ᴄʜᴀɴɢᴇꜱᴀʏ
│ ▢ .ᴛʀᴜᴍᴘꜱᴀʏ
│ ▢ .ᴍɪᴀꜱᴀʏ
│ ▢ .ᴄᴏᴍᴘʟɪᴍᴇɴᴛ
│
│[ sᴇᴀʀᴄʜ ]
│ 
│ ▢ .ᴡɪᴋɪ
│ ▢ .ʟʏʀɪᴄ
│ ▢ .ꜱʜᴏᴡ
│ ▢ .ᴍᴏᴠɪᴇ
│ ▢ .ᴡᴇᴀᴛʜᴇʀ
│
│[ ᴛᴀɢ ]
│
│ ▢ .ᴛᴀɢᴀʟʟ
│ ▢ .ᴛᴀɢᴀᴅᴍɪɴ
│
│[ ᴏᴛʜᴇʀ ]
│ 
│ ▢ .ᴀɴɪᴍᴇ
│ ▢ .ᴡᴀʟʟᴘᴀᴘᴇʀ
│ ▢ .ꜱꜱ
│ ▢ .ᴅɪᴄᴛ
│ ▢ .sʜᴏʀᴛ
│ ▢ .ᴛʀᴛ
│ ▢ .ʀᴇᴍᴏᴠᴇʙɢ
│ 
│[ ᴏᴡɴᴇʀ ᴄᴍɴᴅs ]
│
│ ▢ .ʟᴜᴛᴛᴀᴘɪ 
│ ▢ .ᴀᴜᴛᴏʙɪᴏ
│ ▢ .ʙᴀɴ
│ ▢ .ᴀᴅᴅ
│ ▢ .ᴘʀᴏᴍᴏᴛᴇ
│ ▢ .ᴅᴇᴍᴏᴛᴇ
│ ▢ .ᴍᴜᴛᴇ
│ ▢ .ᴜɴᴍᴜᴛᴇ
│ ▢ .ɪɴᴠɪᴛᴇ
│ ▢ .ꜱᴇᴛᴠᴀʀ
│ 
│
│   ❏🥰Ammukutty😇❏
╰──────────────────╯
`}) 

}));
