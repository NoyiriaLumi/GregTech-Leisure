ServerEvents.recipes(event => {
    const gtr = event.recipes.gtceu

    gtr.forming_press("gtlcore:carbon_rotor")
        .itemInputs("minecraft:chain", "2x gtceu:magnalium_rod", "8x gtceu:magnalium_bolt", "18x gtceu:carbon_fiber_plate")
        .itemOutputs("gtlcore:carbon_rotor")
        .EUt(120)
        .duration(200)

    gtr.forming_press("gtlcore:netherite_rod")
        .itemInputs("minecraft:netherite_upgrade_smithing_template", "2x gtceu:neodymium_rod", "minecraft:netherite_ingot")
        .itemOutputs("2x gtlcore:netherite_rod")
        .EUt(480)
        .duration(400)

    gtr.forming_press("gtlcore:scintillator_crystal")
        .itemInputs("gtceu:vibranium_plate", "gtceu:thallium_thulium_doped_caesium_iodide_dust", "gtceu:polycyclic_aromatic_mixture_dust", "gtceu:cadmium_tungstate_dust", "gtceu:bismuth_germanate_dust", "2x gtceu:mithril_plate")
        .itemOutputs("gtlcore:scintillator_crystal")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(280)
        .cleanroom(GTLCleanroomType.LAW_CLEANROOM)

    gtr.forming_press("gtlcore:grindball_soapstone")
        .notConsumable("gtceu:ball_casting_mold")
        .itemInputs("16x gtceu:soapstone_dust", "2x gtceu:soldering_alloy_ingot")
        .itemOutputs("kubejs:grindball_soapstone")
        .EUt(GTValues.VA[GTValues.IV])
        .duration(800)

    gtr.forming_press("gtlcore:grindball_aluminium")
        .notConsumable("gtceu:ball_casting_mold")
        .itemInputs("16x gtceu:aluminium_dust", "2x gtceu:soldering_alloy_ingot")
        .itemOutputs("kubejs:grindball_aluminium")
        .EUt(GTValues.VA[GTValues.IV])
        .duration(800)

    gtr.forming_press("gtlcore:reactor_fuel_rod")
        .notConsumable("gtceu:cell_extruder_mold")
        .itemInputs("gtceu:magnetic_steel_ingot")
        .itemOutputs("gtlcore:reactor_fuel_rod")
        .EUt(30)
        .duration(200)

    gtr.forming_press("gtlcore:tungsten_carbide_reactor_fuel_rod")
        .notConsumable("gtceu:cell_extruder_mold")
        .itemInputs("gtceu:magnetic_neodymium_ingot", "gtceu:tungsten_carbide_ingot")
        .itemOutputs("gtlcore:tungsten_carbide_reactor_fuel_rod")
        .EUt(120)
        .duration(200)

    gtr.forming_press("gtlcore:raw_imprinted_resonatic_circuit_board")
        .itemInputs("4x gtceu:circuit_compound_dust", "gtceu:magneto_resonatic_dust")
        .itemOutputs("gtlcore:raw_imprinted_resonatic_circuit_board")
        .EUt(480)
        .duration(300)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.forming_press("gtlcore:optical_ram_wafer")
        .itemInputs("gtlcore:rutherfordium_neutronium_wafer", "gtceu:ram_wafer", "gtlcore:photon_carrying_wafer")
        .itemOutputs("gtlcore:optical_ram_wafer")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(150)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.forming_press("gtlcore:exotic_ram_wafer")
        .itemInputs("gtlcore:optical_ram_wafer", "gtceu:nor_memory_wafer", "gtceu:nand_memory_wafer", "gtceu:amethyst_plate", "gtceu:technetium_plate")
        .itemOutputs("gtlcore:exotic_ram_wafer")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(350)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.forming_press("gtlcore:cosmic_ram_wafer")
        .itemInputs("gtlcore:taranium_wafer", "gtceu:ram_wafer", "gtlcore:prepared_cosmic_soc_wafer")
        .itemOutputs("gtlcore:cosmic_ram_wafer")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(550)
        .cleanroom(GTLCleanroomType.LAW_CLEANROOM)

    gtr.forming_press("gtlcore:supracausal_ram_wafer")
        .itemInputs("gtlcore:cosmic_ram_wafer", "gtlcore:exotic_ram_wafer", "gtlcore:pellet_antimatter", "gtceu:legendarium_foil", "gtceu:double_hikarium_plate")
        .itemOutputs("gtlcore:supracausal_ram_wafer")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(750)
        .cleanroom(GTLCleanroomType.LAW_CLEANROOM)

    gtr.forming_press("gtlcore:optical_soc_containment_housing")
        .itemInputs("gtceu:multilayer_fiber_reinforced_printed_circuit_board", "gtceu:titanium_foil", "gtceu:yttrium_barium_cuprate_foil", "gtceu:nickel_zinc_ferrite_foil", "gtceu:uranium_rhodium_dinaquadide_foil", "4x gtceu:darmstadtium_bolt")
        .itemOutputs("gtlcore:optical_soc_containment_housing")
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(290)
        .cleanroom(CleanroomType.CLEANROOM)
})