ServerEvents.recipes(event => {
    const gtr = event.recipes.gtceu

    gtr.canner("gtlcore:rhenium_plasma_containment_cell")
        .notConsumable("gtceu:naquadah_nanoswarm")
        .itemInputs("gtlcore:plasma_containment_cell")
        .itemOutputs("gtlcore:rhenium_plasma_containment_cell")
        .inputFluids("gtceu:degenerate_rhenium_plasma 1000")
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(20)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.canner("gtlcore:charged_triplet_neutronium_sphere")
        .notConsumable("gtceu:neutronium_nanoswarm")
        .itemInputs("gtlcore:triplet_neutronium_sphere")
        .inputFluids("gtceu:free_alpha_gas 1000")
        .itemOutputs("gtlcore:charged_triplet_neutronium_sphere")
        .EUt(500000)
        .duration(200)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.canner("gtlcore:draconiumawakened_plasma_containment_cell")
        .notConsumable("gtceu:draconium_nanoswarm")
        .inputFluids("gtceu:draconiumawakened_plasma 1000")
        .itemInputs("gtlcore:plasma_containment_cell")
        .itemOutputs("gtlcore:draconiumawakened_plasma_containment_cell")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(20)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.canner("gtlcore:dense_neutron_plasma_cell")
        .notConsumable("gtceu:neutronium_nanoswarm")
        .inputFluids("gtceu:dense_neutron_plasma 1000")
        .itemInputs("gtlcore:extremely_durable_plasma_cell")
        .itemOutputs("gtlcore:dense_neutron_plasma_cell")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(20)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.canner("gtlcore:chaos_containment_unit")
        .notConsumable("gtceu:cosmicneutronium_nanoswarm")
        .inputFluids("gtceu:chaos_plasma 1000")
        .itemInputs("gtlcore:time_dilation_containment_unit")
        .itemOutputs("gtlcore:chaos_containment_unit")
        .EUt(GTValues.VA[GTValues.OpV])
        .duration(20)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.canner("gtlcore:infused_breath")
        .inputFluids("enderio:xp_juice 1000")
        .itemInputs("minecraft:dragon_breath")
        .itemOutputs("gtlcore:infused_breath")
        .EUt(480)
        .duration(400)
        .cleanroom(GTLCleanroomType.LAW_CLEANROOM)

    gtr.canner("gtlcore:cosmic_mesh_containment_unit")
        .notConsumable("gtceu:uruium_nanoswarm")
        .itemInputs("gtlcore:time_dilation_containment_unit")
        .inputFluids("gtceu:cosmic_mesh_plasma 1000")
        .itemOutputs("gtlcore:cosmic_mesh_containment_unit")
        .EUt(GTValues.VA[GTValues.OpV])
        .duration(20)

    gtr.canner("gtlcore:bose_einstein_cooling_container")
        .notConsumable("gtceu:iridium_nanoswarm")
        .inputFluids("gtceu:rubidium 288")
        .itemInputs("gtlcore:empty_laser_cooling_container")
        .itemOutputs("gtlcore:bose_einstein_cooling_container")
        .EUt(90000)
        .duration(280)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.canner("gtlcore:sculk")
        .itemInputs("minecraft:dirt", "minecraft:sculk_vein")
        .inputFluids("enderio:xp_juice 10")
        .itemOutputs("minecraft:sculk")
        .EUt(480)
        .duration(600)

    gtr.canner("gtlcore:crystalmatrix_plasma_containment_cell")
        .notConsumable("gtceu:enderium_nanoswarm")
        .inputFluids("gtceu:crystalmatrix_plasma 1000")
        .itemInputs("gtlcore:plasma_containment_cell")
        .itemOutputs("gtlcore:crystalmatrix_plasma_containment_cell")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(20)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.canner("gtlcore:actinium_superhydride_plasma_containment_cell")
        .notConsumable("gtceu:infuscolium_nanoswarm")
        .inputFluids("gtceu:actinium_superhydride_plasma 1000")
        .itemInputs("gtlcore:plasma_containment_cell")
        .itemOutputs("gtlcore:actinium_superhydride_plasma_containment_cell")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(20)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.canner("gtlcore:reactor_uranium_simple")
        .itemInputs("gtlcore:reactor_fuel_rod", "16x gtceu:uranium_dust")
        .inputFluids("gtceu:uranium_235 96")
        .itemOutputs("gtlcore:reactor_uranium_simple")
        .EUt(1920)
        .duration(120)

    gtr.canner("gtlcore:reactor_thorium_simple")
        .itemInputs("gtlcore:reactor_fuel_rod", "12x gtceu:thorium_dust")
        .itemOutputs("gtlcore:reactor_thorium_simple")
        .EUt(480)
        .duration(120)

    gtr.canner("gtlcore:reactor_mox_simple")
        .itemInputs("gtlcore:reactor_fuel_rod", "18x gtceu:uranium_dust")
        .inputFluids("gtceu:plutonium 432")
        .itemOutputs("gtlcore:reactor_mox_simple")
        .EUt(7680)
        .duration(120)

    gtr.canner("gtlcore:reactor_naquadah_simple")
        .itemInputs("gtlcore:tungsten_carbide_reactor_fuel_rod", "4x gtceu:naquadah_dust")
        .inputFluids("gtceu:thorium 144")
        .itemOutputs("gtlcore:reactor_naquadah_simple")
        .EUt(30720)
        .duration(120)
})