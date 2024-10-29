ServerEvents.recipes(event => {
    const gtr = event.recipes.gtceu

    gtr.compressor("gtlcore:compressed_crafting_table")
        .itemInputs("64x minecraft:crafting_table")
        .itemOutputs("avaritia:compressed_crafting_table")
        .EUt(480)
        .duration(200)

    gtr.compressor("gtlcore:graphite_ingot")
        .itemInputs("gtceu:graphite_dust")
        .itemOutputs("gtceu:graphite_ingot")
        .EUt(GTValues.VA[GTValues.LV])
        .duration(300)

    gtr.compressor("gtlcore:diamond_compressed_block")
        .itemInputs("8x minecraft:diamond_block")
        .itemOutputs("kubejs:diamond_compressed_block")
        .EUt(GTValues.VA[GTValues.HV])
        .duration(300)

    gtr.compressor("gtlcore:dimensionally_transcendent_steam_oven")
        .itemInputs("16x gtceu:steam_oven")
        .itemOutputs("gtlcore:dimensionally_transcendent_steam_oven")
        .EUt(16)
        .duration(1200)

    gtr.compressor("gtlcore:rubber_plate")
        .itemInputs("2x gtceu:sticky_resin")
        .itemOutputs("gtceu:rubber_plate")
        .EUt(2)
        .duration(100)

    gtr.compressor("gtlcore:spacetime_block")
        .itemInputs("9x gtceu:spacetime_ingot")
        .itemOutputs("gtceu:spacetime_block")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(3000)

    gtr.compressor("gtlcore:dimensionally_transcendent_dirt_forge")
        .itemInputs("16x gtceu:primitive_blast_furnace")
        .itemOutputs("gtlcore:dimensionally_transcendent_dirt_forge")
        .EUt(8)
        .duration(1200)

    gtr.compressor("gtlcore:dimensionally_transcendent_steam_boiler")
        .itemInputs("16x gtceu:tungstensteel_large_boiler")
        .itemOutputs("gtlcore:dimensionally_transcendent_steam_boiler")
        .EUt(GTValues.VA[GTValues.IV])
        .duration(1200)

    gtr.neutron_compressor("gtlcore:combined_singularity_0")
        .itemInputs("64x gtceu:lafium_block", "64x gtceu:potin_block")
        .itemOutputs("gtlcore:combined_singularity_0")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(200)

    gtr.neutron_compressor("gtlcore:combined_singularity_1")
        .itemInputs("64x gtceu:enderite_block", "64x gtceu:indium_gallium_phosphide_block")
        .itemOutputs("gtlcore:combined_singularity_1")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(200)

    gtr.neutron_compressor("gtlcore:combined_singularity_2")
        .itemInputs("64x gtceu:ruthenium_trinium_americium_neutronate_block", "64x gtceu:yttrium_barium_cuprate_block")
        .itemOutputs("gtlcore:combined_singularity_2")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(200)

    gtr.neutron_compressor("gtlcore:combined_singularity_3")
        .itemInputs("64x gtceu:hastelloyk_243_block", "64x gtceu:cobalt_brass_block")
        .itemOutputs("gtlcore:combined_singularity_3")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(200)

    gtr.neutron_compressor("gtlcore:combined_singularity_4")
        .itemInputs("64x gtceu:titansteel_block", "64x gtceu:uranium_rhodium_dinaquadide_block")
        .itemOutputs("gtlcore:combined_singularity_4")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(200)

    gtr.neutron_compressor("gtlcore:combined_singularity_5")
        .itemInputs("64x gtceu:hastelloy_x_block", "64x gtceu:red_steel_block")
        .itemOutputs("gtlcore:combined_singularity_5")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(200)

    gtr.neutron_compressor("gtlcore:combined_singularity_6")
        .itemInputs("64x gtceu:high_durability_compound_steel_block", "64x gtceu:germanium_tungsten_nitride_block")
        .itemOutputs("gtlcore:combined_singularity_6")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(200)

    gtr.neutron_compressor("gtlcore:combined_singularity_7")
        .itemInputs("64x gtceu:hsse_block", "64x gtceu:watertight_steel_block")
        .itemOutputs("gtlcore:combined_singularity_7")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(200)

    gtr.neutron_compressor("gtlcore:combined_singularity_8")
        .itemInputs("64x gtceu:pikyonium_block", "64x gtceu:aluminium_bronze_block")
        .itemOutputs("gtlcore:combined_singularity_8")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(200)

    gtr.neutron_compressor("gtlcore:combined_singularity_9")
        .itemInputs("64x gtceu:abyssalalloy_block", "64x gtceu:soldering_alloy_block")
        .itemOutputs("gtlcore:combined_singularity_9")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(200)

    gtr.neutron_compressor("gtlcore:combined_singularity_10")
        .itemInputs("64x gtceu:black_titanium_block", "64x gtceu:nickel_zinc_ferrite_block")
        .itemOutputs("gtlcore:combined_singularity_10")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(200)

    gtr.neutron_compressor("gtlcore:combined_singularity_11")
        .itemInputs("64x gtceu:ultimet_block", "64x gtceu:hsla_steel_block")
        .itemOutputs("gtlcore:combined_singularity_11")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(200)

    gtr.neutron_compressor("gtlcore:combined_singularity_12")
        .itemInputs("64x gtceu:enriched_naquadah_trinium_europium_duranide_block", "64x gtceu:rtm_alloy_block")
        .itemOutputs("gtlcore:combined_singularity_12")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(200)

    gtr.neutron_compressor("gtlcore:combined_singularity_13")
        .itemInputs("64x gtceu:blue_steel_block", "64x gtceu:hastelloy_c_276_block")
        .itemOutputs("gtlcore:combined_singularity_13")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(200)

    gtr.neutron_compressor("gtlcore:combined_singularity_14")
        .itemInputs("64x gtceu:cinobite_block", "64x gtceu:stellite_100_block")
        .itemOutputs("gtlcore:combined_singularity_14")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(200)

    gtr.neutron_compressor("gtlcore:combined_singularity_15")
        .itemInputs("64x gtceu:maraging_steel_300_block", "64x gtceu:grisium_block")
        .itemOutputs("gtlcore:combined_singularity_15")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(200)

    function implosion_compressor_add(input, output, am) {
        gtr.implosion_compressor(output + "_powderbarrel")
            .itemInputs(input)
            .itemInputs("8x gtceu:powderbarrel")
            .itemOutputs(am + "x " + output)
            .chancedOutput("gtceu:dark_ash_dust", 2500, 0)
            .EUt(30)
            .duration(20)

        gtr.implosion_compressor(output + "_tnt")
            .itemInputs(input)
            .itemInputs("4x minecraft:tnt")
            .itemOutputs(am + "x " + output)
            .chancedOutput("gtceu:dark_ash_dust", 2500, 0)
            .EUt(30)
            .duration(20)

        gtr.implosion_compressor(output + "_dynamite")
            .itemInputs(input)
            .itemInputs("2x gtceu:dynamite")
            .itemOutputs(am + "x " + output)
            .chancedOutput("gtceu:dark_ash_dust", 2500, 0)
            .EUt(30)
            .duration(20)

        gtr.implosion_compressor(output + "_itnt")
            .itemInputs(input)
            .itemInputs("gtceu:industrial_tnt")
            .itemOutputs(am + "x " + output)
            .chancedOutput("gtceu:dark_ash_dust", 2500, 0)
            .EUt(30)
            .duration(20)

        gtr.electric_implosion_compressor("e" + output)
            .itemInputs(input)
            .itemOutputs(am + "x " + output)
            .EUt(GTValues.VA[GTValues.UV])
            .duration(1)
    }
    implosion_compressor_add(["minecraft:command_block", "gtlcore:two_way_foil"], "gtlcore:command_block_core", 1)
    implosion_compressor_add(["ae2:singularity", "gtlcore:warped_ender_pearl"], "gtlcore:entangled_singularity", 1)
    implosion_compressor_add(["4x ad_astra:steel_plate", "2x gtceu:dense_tungsten_steel_plate"], "ad_astra:steel_block", 1)
    implosion_compressor_add(["64x avaritia:neutron_pile", "64x avaritia:neutron_pile"], "avaritia:neutron_nugget", 1)
    implosion_compressor_add("9x avaritia:neutron_nugget", "avaritia:neutron_ingot", 1)
    implosion_compressor_add("9x avaritia:neutron_ingot", "avaritia:neutron", 1)
    implosion_compressor_add(["64x avaritia:compressed_crafting_table", "64x avaritia:compressed_crafting_table"], "avaritia:double_compressed_crafting_table", 1)
    implosion_compressor_add(["4x gtceu:exquisite_diamond_gem", "minecraft:netherite_scrap"], "avaritia:diamond_lattice", 1)
    implosion_compressor_add(["8x avaritia:diamond_lattice", "minecraft:nether_star"], "avaritia:crystal_matrix", 1)
    implosion_compressor_add(["2x minecraft:chest", "2x ae2:smooth_sky_stone_chest"], "avaritia:compressed_chest", 1)

    gtr.electric_implosion_compressor("minecraft:diamond")
        .itemInputs("64x minecraft:coal")
        .itemInputs("64x minecraft:coal")
        .itemOutputs("minecraft:diamond")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(1)

    gtr.electric_implosion_compressor("avaritia:eternal_singularity")
        .notConsumable("16x gtceu:eternity_nanoswarm")
        .itemInputs("gtceu:spacetime_dust")
        .itemOutputs("avaritia:eternal_singularity")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(20)
})