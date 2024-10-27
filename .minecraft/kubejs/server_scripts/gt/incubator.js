ServerEvents.recipes(event => {
    const gtr = event.recipes.gtceu

    const overworld_ore =
        [[["6x #forge:ores/bentonite",
            "4x #forge:ores/magnetite",
            "4x #forge:ores/olivine",
            "2x #forge:ores/glauconite_sand"], "gtlcore:olivine_vein_essence"],

        [["18x #forge:ores/almandine",
            "12x #forge:ores/pyrope",
            "6x #forge:ores/sapphire",
            "6x #forge:ores/green_sapphire"], "gtlcore:sapphire_vein_essence"],

        [["6x #forge:ores/goethite",
            "24x #forge:ores/yellow_limonite",
            "24x #forge:ores/hematite",
            "12x #forge:ores/malachite"], "gtlcore:iron_vein_essence"],

        [["12x #forge:ores/soapstone",
            "8x #forge:ores/talc",
            "8x #forge:ores/glauconite_sand",
            "4x #forge:ores/pentlandite"], "gtlcore:lubricant_vein_essence"],

        [["6x #forge:ores/grossular",
            "4x #forge:ores/spessartine",
            "4x #forge:ores/pyrolusite",
            "2x #forge:ores/tantalite"], "gtlcore:manganese_vein_ow_essence"],

        [["25x #forge:ores/chalcopyrite",
            "1x #forge:ores/zeolite",
            "1x #forge:ores/cassiterite",
            "5x #forge:ores/realgar"], "gtlcore:copper_tin_vein_essence"],

        [["24x #forge:ores/coal"], "gtlcore:coal_vein_essence"],

        [["4x #forge:ores/chalcopyrite",
            "16x #forge:ores/iron",
            "16x #forge:ores/pyrite",
            "16x #forge:ores/copper"], "gtlcore:copper_vein_essence"],

        [["24x #forge:ores/magnetite",
            "16x #forge:ores/vanadium_magnetite",
            "8x #forge:ores/gold"], "gtlcore:magnetite_vein_ow_essence"],

        [["12x #forge:ores/lazurite",
            "8x #forge:ores/sodalite",
            "8x #forge:ores/lapis",
            "4x #forge:ores/calcite"], "gtlcore:lapis_vein_essence"],

        [["12x #forge:ores/galena",
            "8x #forge:ores/silver",
            "4x #forge:ores/lead"], "gtlcore:galena_vein_essence"],

        [["6x #forge:ores/kyanite",
            "4x #forge:ores/mica",
            "4x #forge:ores/bauxite",
            "2x #forge:ores/pollucite"], "gtlcore:mica_vein_essence"],

        [["32x #forge:ores/tin",
            "16x #forge:ores/cassiterite"], "gtlcore:cassiterite_vein_essence"],

        [["12x #forge:ores/red_garnet",
            "8x #forge:ores/yellow_garnet",
            "8x #forge:ores/amethyst",
            "4x #forge:ores/opal"], "gtlcore:garnet_vein_essence"],

        [["24x #forge:ores/basaltic_mineral_sand",
            "16x #forge:ores/granitic_mineral_sand",
            "16x #forge:ores/fullers_earth",
            "8x #forge:ores/gypsum"], "gtlcore:mineral_sand_vein_essence"],

        [["15x #forge:ores/rock_salt",
            "1x #forge:ores/salt",
            "5x #forge:ores/lepidolite",
            "5x #forge:ores/spodumene"], "gtlcore:salts_vein_essence"],

        [["18x #forge:ores/redstone",
            "12x #forge:ores/ruby",
            "6x #forge:ores/cinnabar"], "gtlcore:redstone_vein_ow_essence"],

        [["12x #forge:ores/apatite",
            "8x #forge:ores/tricalcium_phosphate",
            "4x #forge:ores/pyrochlore"], "gtlcore:apatite_vein_essence"],

        [["24x #forge:ores/cassiterite_sand",
            "16x #forge:ores/garnet_sand",
            "16x #forge:ores/asbestos",
            "8x #forge:ores/diatomite"], "gtlcore:garnet_tin_vein_essence"],

        [["24x #forge:ores/oilsands"], "gtlcore:oilsands_vein_essence"],

        [["12x #forge:ores/graphite",
            "8x #forge:ores/diamond"], "gtlcore:diamond_vein_essence"],

        [["12x #forge:ores/garnierite",
            "8x #forge:ores/nickel",
            "8x #forge:ores/cobaltite",
            "4x #forge:ores/pentlandite"], "gtlcore:nickel_vein_essence"]]

    overworld_ore.forEach((overworld) => {
        gtr.incubator("overworld_e_" + overworld[1])
            .notConsumable("16x kubejs:overworld_data")
            .itemInputs("gtlcore:essence_seed")
            .inputFluids("gtceu:biomass 10000", "gtceu:milk 10000")
            .itemInputs(overworld[0])
            .itemOutputs("64x " + overworld[1])
            .EUt(GTValues.VA[GTValues.HV])
            .duration(12000)
    })

    const nether_ore =
        [[["28x #forge:ores/tetrahedrite",
            "14x #forge:ores/copper",
            "7x #forge:ores/stibnite"], "gtlcore:tetrahedrite_vein_essence"],

        [["9x #forge:ores/bastnasite",
            "3x #forge:ores/molybdenum",
            "3x #forge:ores/neodymium"], "gtlcore:monazite_vein_essence"],

        [["18x #forge:ores/redstone",
            "12x #forge:ores/ruby",
            "6x #forge:ores/cinnabar"], "gtlcore:redstone_vein_essence"],

        [["12x #forge:ores/saltpeter",
            "8x #forge:ores/diatomite",
            "8x #forge:ores/electrotine",
            "4x #forge:ores/alunite"], "gtlcore:saltpeter_vein_essence"],

        [["9x #forge:ores/beryllium",
            "12x #forge:ores/emerald"], "gtlcore:beryllium_vein_essence"],

        [["6x #forge:ores/grossular",
            "4x #forge:ores/pyrolusite",
            "2x #forge:ores/tantalite"], "gtlcore:manganese_vein_essence"],

        [["15x #forge:ores/wulfenite",
            "1x #forge:ores/molybdenite",
            "5x #forge:ores/molybdenum",
            "5x #forge:ores/powellite"], "gtlcore:molybdenum_vein_essence"],

        [["9x #forge:ores/goethite",
            "6x #forge:ores/yellow_limonite",
            "6x #forge:ores/hematite",
            "3x #forge:ores/gold"], "gtlcore:banded_iron_vein_essence"],

        [["12x #forge:ores/quartzite",
            "8x #forge:ores/certus_quartz",
            "4x #forge:ores/barite"], "gtlcore:certus_quartz_essence"],

        [["21x #forge:ores/blue_topaz",
            "14x #forge:ores/topaz",
            "14x #forge:ores/chalcocite",
            "7x #forge:ores/bornite"], "gtlcore:topaz_vein_essence"],

        [["24x #forge:ores/nether_quartz",
            "8x #forge:ores/quartzite",
            "5x minecraft:ancient_debris"], "gtlcore:nether_quartz_vein_essence"],

        [["3x #forge:ores/sulfur",
            "2x #forge:ores/pyrite",
            "1x #forge:ores/sphalerite"], "gtlcore:sulfur_vein_essence"]]

    nether_ore.forEach((nether_) => {
        gtr.incubator("nether_e_" + nether_[1])
            .notConsumable("32x kubejs:nether_data")
            .itemInputs("gtlcore:essence_seed")
            .inputFluids("gtceu:biomass 10000", "gtceu:milk 10000")
            .itemInputs(nether_[0])
            .itemOutputs("64x " + nether_[1])
            .EUt(GTValues.VA[GTValues.HV])
            .duration(12000)

    })

    const end_ore =
        [[["18x #forge:ores/magnetite",
            "12x #forge:ores/vanadium_magnetite",
            "12x #forge:ores/chromite",
            "6x #forge:ores/gold"], "gtlcore:magnetite_vein_end_essence"],

        [["16x #forge:ores/bauxite",
            "8x #forge:ores/ilmenite",
            "8x #forge:ores/aluminium"], "gtlcore:bauxite_vein_end_essence"],

        [["6x #forge:ores/bornite",
            "4x #forge:ores/cooperite",
            "4x #forge:ores/platinum",
            "2x #forge:ores/palladium"], "gtlcore:sheldonite_vein_essence"],

        [["12x #forge:ores/scheelite",
            "8x #forge:ores/tungstate",
            "4x #forge:ores/lithium"], "gtlcore:scheelite_vein_essence"],

        [["18x #forge:ores/pitchblende",
            "12x #forge:ores/uraninite"], "gtlcore:pitchblende_vein_end_essence"],

        [["18x #forge:ores/naquadah",
            "6x #forge:ores/plutonium"], "gtlcore:naquadah_vein_essence"]]

    end_ore.forEach((end) => {
        gtr.incubator("end_e_" + end[1])
            .notConsumable("64x kubejs:end_data")
            .itemInputs("gtlcore:essence_seed")
            .inputFluids("gtceu:biomass 10000", "gtceu:milk 10000")
            .itemInputs(end[0])
            .itemOutputs("64x " + end[1])
            .EUt(GTValues.VA[GTValues.HV])
            .duration(12000)
    })

    gtr.incubator("gtlcore:variation_wood")
        .itemInputs("64x kubejs:barnarda_log", "16x minecraft:crimson_stem", "64x #forge:dusts/wood", "gtceu:lapotron_dust")
        .inputFluids("gtceu:unknowwater 10000", "gtceu:biomass 1000")
        .itemOutputs("64x kubejs:variation_wood")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(2400)
        .addData("filter_casing", 3)
        .addData("radioactivity", 440)

    gtr.incubator("gtlcore:variation_wood1")
        .itemInputs("64x kubejs:barnarda_log", "16x minecraft:warped_stem", "64x #forge:dusts/wood", "gtceu:lapotron_dust")
        .inputFluids("gtceu:unknowwater 10000", "gtceu:biomass 1000")
        .itemOutputs("64x kubejs:variation_wood")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(2400)
        .addData("filter_casing", 3)
        .addData("radioactivity", 440)

    gtr.incubator("gtlcore:xenoxene")
        .itemInputs("16x gtceu:antimony_trioxide_dust", "16x gtceu:osmium_dust")
        .inputFluids("gtceu:oil 20000")
        .outputFluids("gtceu:xenoxene 20000")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(2400)
        .addData("filter_casing", 3)
        .addData("radioactivity", 360)

    gtr.incubator("gtlcore:dragon_cells")
        .itemInputs("64x gtlcore:dragon_stem_cells", "16x gtceu:naquadria_dust")
        .inputFluids("gtceu:biohmediumsterilized 10000", "gtceu:mutagen 10000")
        .itemOutputs("64x gtlcore:dragon_cells")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(1600)
        .addData("filter_casing", 3)
        .addData("radioactivity", 560)

    gtr.incubator("gtlcore:space_essence")
        .itemInputs("#gtlcore:vein_essence", "ae2:sky_dust", "gtceu:tiny_nether_star_dust")
        .inputFluids("gtceu:biomass 100", "gtceu:sterilized_growth_medium 100")
        .itemOutputs("gtlcore:space_essence")
        .EUt(480)
        .duration(1200)
        .addData("radioactivity", 180)

    gtr.incubator("gtlcore:cow_spawn_egg")
        .notConsumable(Item.of("enderio:filled_soul_vial", `{BlockEntityTag:{EntityStorage:{Entity:{id:"minecraft:cow"}}}}`).weakNBT())
        .itemInputs("4x minecraft:beef", "4x minecraft:bone", "4x minecraft:leather")
        .inputFluids("gtceu:milk 1000")
        .itemOutputs("minecraft:cow_spawn_egg")
        .EUt(480)
        .duration(1200)
        .addData("radioactivity", 120)

    gtr.incubator("gtlcore:chorus_fruit")
        .notConsumable("64x minecraft:chorus_flower")
        .itemOutputs("64x minecraft:chorus_fruit")
        .inputFluids("gtceu:unknowwater 1000", "gtceu:ender_pearl 100")
        .EUt(120)
        .duration(1200)
        .addData("radioactivity", 230)

    gtr.incubator("gtlcore:echo")
        .notConsumable("64x minecraft:sculk_shrieker")
        .notConsumable("64x minecraft:sculk_sensor")
        .itemInputs("64x minecraft:dirt", "64x minecraft:sculk_vein")
        .itemOutputs("64x minecraft:sculk")
        .inputFluids("gtceu:unknowwater 1000", "enderio:xp_juice 1000")
        .outputFluids("gtceu:echo_shard 10000")
        .EUt(1920)
        .duration(2400)
        .addData("filter_casing", 3)
        .addData("radioactivity", 380)

    gtr.incubator("gtlcore:biomediumraw")
        .itemInputs("64x gtceu:stem_cells", "16x gtlcore:tcetieseaweedextract", "gtceu:tritanium_dust")
        .inputFluids("gtceu:raw_growth_medium 1000")
        .outputFluids("gtceu:biomediumraw 1000")
        .EUt(1920)
        .duration(1200)
        .addData("filter_casing", 2)
        .addData("radioactivity", 80)
        .addCondition(new GravityCondition(true))

    gtr.incubator("gtlcore:biomediumraw1")
        .itemInputs("64x gtlcore:biological_cells", "16x gtlcore:tcetieseaweedextract", "gtceu:tritanium_dust")
        .inputFluids("gtceu:raw_growth_medium 10000")
        .outputFluids("gtceu:biomediumraw 10000")
        .EUt(1920)
        .duration(1200)
        .addData("filter_casing", 2)
        .addData("radioactivity", 120)
        .addCondition(new GravityCondition(true))

    gtr.incubator("gtlcore:seaweedbroth")
        .itemInputs("64x minecraft:kelp", "20x gtceu:alien_algae_dust", "8x gtceu:energium_dust", "gtceu:mithril_dust")
        .inputFluids("gtceu:unknownnutrientagar 50000", "gtceu:methane 50000")
        .outputFluids("gtceu:seaweedbroth 50000")
        .EUt(7680)
        .duration(4800)
        .addData("filter_casing", 2)
        .addData("radioactivity", 80)

    gtr.incubator("gtlcore:biological_cells")
        .itemInputs("64x gtceu:stem_cells", "gtceu:enriched_naquadah_dust")
        .inputFluids("gtceu:biohmediumsterilized 1000", "gtceu:mutagen 1000")
        .itemOutputs("64x gtlcore:biological_cells")
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(800)
        .addData("filter_casing", 2)
        .addData("radioactivity", 60)

    gtr.incubator("gtlcore:stem_cells")
        .chancedInput("gtlcore:glacio_spirit", 6000, 500)
        .itemInputs("gtceu:osmiridium_dust")
        .inputFluids("gtceu:sterilized_growth_medium 500", "gtceu:bacteria 500")
        .itemOutputs("32x gtceu:stem_cells")
        .outputFluids("gtceu:bacterial_sludge 500")
        .EUt(30720)
        .duration(300)
        .addData("filter_casing", 2)
        .addData("radioactivity", 10)
        .addCondition(new GravityCondition(true))

    gtr.incubator("gtlcore:glacio_spirit")
        .chancedInput("4x gtlcore:glacio_spirit", 1000, 100)
        .itemInputs("16x gtceu:celestine_dust", "gtlcore:essence")
        .inputFluids("ad_astra:cryo_fuel 100", "gtceu:ice 900")
        .itemOutputs("64x gtlcore:glacio_spirit")
        .EUt(30720)
        .duration(2000)
        .addData("radioactivity", 40)
})