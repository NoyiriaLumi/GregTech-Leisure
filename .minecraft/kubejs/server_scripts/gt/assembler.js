ServerEvents.recipes(event => {
    const gtr = event.recipes.gtceu

    gtr.assembler_module("gtlcore:scintillator")
        .itemInputs("12x gtceu:highurabilityompoundteel_screw", "12x gtceu:fine_cinobite_wire", "6x gtceu:zylon_foil", "4x gtceu:cinobite_plate", "4x gtceu:echoite_plate", "gtlcore:scintillator_crystal", "gtlcore:separation_electromagnet", "gtceu:double_astraltitanium_plate")
        .itemOutputs("gtlcore:scintillator")
        .inputFluids("gtceu:trinium_titanium 432", "gtceu:soldering_alloy 288", "gtceu:mutated_living_solder 144")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(400)
        .addData("SEPMTier", 2)

    gtr.assembler_module("gtlcore:relativistic_spinorial_memory_system")
        .itemInputs("2x gtceu:neutron_reflector", "gtlcore:rydberg_spinorial_assembly", "4x gtlcore:charged_lepton_trap_crystal", "2x gtceu:legendarium_single_wire", "gtceu:uhv_field_generator", "gtceu:uiv_sensor", "gtceu:fusion_coil")
        .inputFluids("gtceu:uu_matter 10000", "gtceu:noble_gas 2000", "gtceu:cosmic_computing_mixture 1000", "gtceu:neutronium 1296")
        .itemOutputs("gtlcore:relativistic_spinorial_memory_system")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(800)
        .addData("SEPMTier", 4)

    gtr.assembler_module("gtlcore:microwormhole_generator")
        .itemInputs("2x gtceu:zpm_emitter", "2x gtceu:enriched_naquadah_trinium_europium_duranide_single_wire", "2x gtceu:neutronium_plate", "gtceu:zpm_field_generator", "gtlcore:contained_kerr_singularity", "gtlcore:void_matter", "gtceu:enderium_nanoswarm", "2x gtceu:celestialtungsten_plate")
        .inputFluids("gtceu:tritanium 576")
        .itemOutputs("gtlcore:microwormhole_generator")
        .EUt(100000)
        .duration(200)
        .addData("SEPMTier", 4)

    gtr.assembler_module("gtlcore:nuclear_clock")
        .itemInputs("2x gtceu:uiv_sensor", "2x gtlcore:ultrashort_pulse_laser", "2x gtceu:neutronium_plate", "gtlcore:scintillator", "gtlcore:bose_einstein_cooling_container", "gtceu:iron_nanoswarm", "gtceu:uv_naquadria_battery", "2x gtceu:double_rhodium_plate")
        .inputFluids("gtceu:thorium 144", "gtceu:black_titanium 1296")
        .itemOutputs("gtlcore:nuclear_clock")
        .EUt(33550000)
        .duration(1600)
        .addData("SEPMTier", 3)

    gtr.assembler_module("gtlcore:macrowormhole_generator")
        .itemInputs("4x gtceu:uv_emitter", "4x gtceu:uv_sensor", "2x gtceu:uv_field_generator", "gtlcore:contained_high_density_protonic_matter", "gtlcore:microwormhole_generator", "gtlcore:contained_kerr_singularity", "gtceu:zpm_naquadria_battery", "gtlcore:kinetic_matter")
        .inputFluids("gtceu:naquadah_alloy 576")
        .itemOutputs("gtlcore:macrowormhole_generator")
        .EUt(1000000)
        .duration(400)
        .addData("SEPMTier", 4)

    gtr.assembler_module("gtlcore:stabilized_wormhole_generator")
        .itemInputs("4x gtceu:uev_emitter", "4x gtceu:uev_sensor", "2x gtceu:uev_field_generator", "gtlcore:contained_exotic_matter", "gtlcore:macrowormhole_generator", "gtlcore:contained_kerr_singularity", "gtceu:energy_cluster", "gtlcore:omni_matter")
        .inputFluids("gtceu:naquadah_alloy 576")
        .itemOutputs("gtlcore:stabilized_wormhole_generator")
        .EUt(10000000)
        .duration(800)
        .addData("SEPMTier", 4)

    gtr.assembler_module("gtlcore:ctc_computational_unit_container")
        .itemInputs("36x gtceu:enriched_naquadah_plate", "36x gtceu:fullerene_polymer_matrix_pulp_plate", "6x gtceu:heavy_quark_degenerate_matter_plate", "3x gtceu:uhv_field_generator", "2x gtceu:taranium_plate", "gtlcore:ctc_guidance_unit", "gtlcore:manifold_oscillatory_power_cell", "4x gtceu:double_uranium_plate", "gtceu:dense_darmstadtium_plate", "gtceu:neutronium_frame", "gtlcore:time_dilation_containment_unit", "gtlcore:stabilized_wormhole_generator", "2x gtlcore:dark_matter", "gtceu:starmetal_nanoswarm", "8x gtceu:double_black_dwarf_mtter_plate", "8x gtceu:double_trinium_plate")
        .inputFluids("gtceu:superheavy_l_alloy 1296", "gtceu:superheavy_h_alloy 1296", "gtceu:trinium_titanium 1296", "gtceu:adamantine 1296")
        .itemOutputs("gtlcore:ctc_computational_unit_container")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(800)
        .addData("SEPMTier", 5)

    gtr.assembler_module("gtlcore:space_probe_mk1")
        .itemInputs("gtceu:energy_module",
            "4x gtceu:data_module",
            "2x gtceu:uiv_emitter",
            "2x gtceu:uiv_sensor",
            "gtceu:uiv_field_generator",
            "4x gtceu:adamantium_plate")
        .inputFluids("gtceu:mutated_living_solder 1296", "gtceu:soldering_alloy 2880", "gtceu:lubricant 5760", "gtceu:neutronium 1296")
        .itemOutputs("gtlcore:space_probe_mk1")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(400)
        .addData("SEPMTier", 3)

    gtr.assembler_module("gtlcore:space_probe_mk2")
        .itemInputs("gtceu:energy_cluster",
            "16x gtceu:data_module",
            "2x gtceu:uxv_emitter",
            "2x gtceu:uxv_sensor",
            "gtceu:uxv_field_generator",
            "4x gtceu:vibranium_plate",
            "8x gtceu:celestialtungsten_plate")
        .inputFluids("gtceu:mutated_living_solder 1296", "gtceu:soldering_alloy 2880", "gtceu:lubricant 5760", "gtceu:neutronium 1296")
        .itemOutputs("gtlcore:space_probe_mk2")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(400)
        .addData("SEPMTier", 4)

    gtr.assembler_module("gtlcore:space_probe_mk3")
        .itemInputs("gtceu:max_battery",
            "64x gtceu:data_module",
            "2x gtceu:opv_emitter",
            "2x gtceu:opv_sensor",
            "gtceu:opv_field_generator",
            "gtceu:cosmicneutronium_nanoswarm",
            "4x gtceu:draconium_plate")
        .inputFluids("gtceu:super_mutated_living_solder 1296", "gtceu:mutated_living_solder 2880", "gtceu:lubricant 5760", "gtceu:cosmicneutronium 1296")
        .itemOutputs("gtlcore:space_probe_mk3")
        .EUt(GTValues.VA[GTValues.OpV])
        .duration(400)
        .addData("SEPMTier", 5)

    gtr.assembler_module("gtlcore:space_drone_mk1")
        .itemInputs("gtceu:titanium_drill_head",
            "4x gtceu:ev_vanadium_battery",
            "4x #gtceu:circuits/uv",
            "ae2:wireless_receiver",
            "gtceu:uv_electric_pump",
            "gtceu:uv_electric_piston",
            "2x gtceu:uv_electric_motor",
            "2x gtceu:uv_conveyor_module",
            "2x gtceu:uv_robot_arm",
            "gtceu:uv_sensor",
            "gtceu:uv_emitter",
            "4x gtceu:tritanium_quadruple_wire",
            "4x gtceu:power_thruster",
            "2x gtceu:steel_minecart_wheels",
            "4x gtceu:steel_spring",
            "8x gtceu:darmstadtium_plate")
        .inputFluids("gtceu:soldering_alloy 2880", "gtceu:manganese 2880", "gtceu:potin 2880", "gtceu:ultimet 2880")
        .itemOutputs("gtlcore:space_drone_mk1")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(600)
        .addData("SEPMTier", 1)

    gtr.assembler_module("gtlcore:space_drone_mk2")
        .itemInputs("gtceu:ultimet_drill_head",
            "16x gtceu:ev_vanadium_battery",
            "4x #gtceu:circuits/uhv",
            "ae2:wireless_receiver",
            "gtceu:uhv_electric_pump",
            "gtceu:uhv_electric_piston",
            "2x gtceu:uhv_electric_motor",
            "2x gtceu:uhv_conveyor_module",
            "2x gtceu:uhv_robot_arm",
            "gtceu:uhv_sensor",
            "gtceu:uhv_emitter",
            "4x gtceu:abyssalalloy_quadruple_wire",
            "4x gtceu:power_thruster",
            "2x gtceu:steel_minecart_wheels",
            "4x gtceu:steel_spring",
            "8x gtceu:neutronium_plate")
        .inputFluids("gtceu:soldering_alloy 2880", "gtceu:steel 2880", "gtceu:electrum 2880", "gtceu:vanadium_steel 2880")
        .itemOutputs("gtlcore:space_drone_mk2")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(600)
        .addData("SEPMTier", 1)

    gtr.assembler_module("gtlcore:space_drone_mk3")
        .itemInputs("gtceu:hsse_drill_head",
            "4x gtceu:iv_vanadium_battery",
            "4x #gtceu:circuits/uev",
            "ae2:wireless_receiver",
            "gtceu:uev_electric_pump",
            "gtceu:uev_electric_piston",
            "2x gtceu:uev_electric_motor",
            "2x gtceu:uev_conveyor_module",
            "2x gtceu:uev_robot_arm",
            "gtceu:uev_sensor",
            "gtceu:uev_emitter",
            "4x gtceu:titansteel_quadruple_wire",
            "4x gtceu:power_thruster",
            "2x gtceu:steel_minecart_wheels",
            "4x gtceu:steel_spring",
            "8x gtceu:quantanium_plate")
        .inputFluids("gtceu:soldering_alloy 2880", "gtceu:yttrium 2880", "gtceu:blue_alloy 2880", "gtceu:rtm_alloy 2880")
        .itemOutputs("gtlcore:space_drone_mk3")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(600)
        .addData("SEPMTier", 2)

    gtr.assembler_module("gtlcore:space_drone_mk4")
        .itemInputs("gtceu:naquadah_alloy_drill_head",
            "16x gtceu:iv_vanadium_battery",
            "4x #gtceu:circuits/uiv",
            "ae2:wireless_receiver",
            "gtceu:uiv_electric_pump",
            "gtceu:uiv_electric_piston",
            "2x gtceu:uiv_electric_motor",
            "2x gtceu:uiv_conveyor_module",
            "2x gtceu:uiv_robot_arm",
            "gtceu:uiv_sensor",
            "gtceu:uiv_emitter",
            "4x gtceu:adamantine_quadruple_wire",
            "4x gtceu:power_thruster",
            "2x gtceu:steel_minecart_wheels",
            "4x gtceu:steel_spring",
            "8x gtceu:adamantium_plate")
        .inputFluids("gtceu:soldering_alloy 2880", "gtceu:bohrium 2880", "gtceu:tungsten_carbide 2880", "gtceu:rhodium_plated_palladium 2880e")
        .itemOutputs("gtlcore:space_drone_mk4")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(600)
        .addData("SEPMTier", 3)

    gtr.assembler_module("gtlcore:space_drone_mk5")
        .itemInputs("gtceu:duranium_drill_head",
            "4x gtceu:luv_vanadium_battery",
            "4x #gtceu:circuits/uxv",
            "ae2:wireless_receiver",
            "gtceu:uxv_electric_pump",
            "gtceu:uxv_electric_piston",
            "2x gtceu:uxv_electric_motor",
            "2x gtceu:uxv_conveyor_module",
            "2x gtceu:uxv_robot_arm",
            "gtceu:uxv_sensor",
            "gtceu:uxv_emitter",
            "4x gtceu:naquadriatictaranium_quadruple_wire",
            "4x gtceu:power_thruster",
            "2x gtceu:steel_minecart_wheels",
            "4x gtceu:steel_spring",
            "8x gtceu:vibranium_plate")
        .inputFluids("gtceu:soldering_alloy 2880", "gtceu:meitnerium 2880", "gtceu:black_bronze 2880", "gtceu:hssg 2880")
        .itemOutputs("gtlcore:space_drone_mk5")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(600)
        .addData("SEPMTier", 4)

    gtr.assembler_module("gtlcore:space_drone_mk6")
        .itemInputs("gtceu:neutronium_drill_head",
            "16x gtceu:luv_vanadium_battery",
            "4x #gtceu:circuits/opv",
            "ae2:wireless_receiver",
            "gtceu:opv_electric_pump",
            "gtceu:opv_electric_piston",
            "2x gtceu:opv_electric_motor",
            "2x gtceu:opv_conveyor_module",
            "2x gtceu:opv_robot_arm",
            "gtceu:opv_sensor",
            "gtceu:opv_emitter",
            "4x gtceu:starmetal_quadruple_wire",
            "4x gtceu:power_thruster",
            "2x gtceu:steel_minecart_wheels",
            "4x gtceu:steel_spring",
            "8x gtceu:draconium_plate")
        .inputFluids("gtceu:soldering_alloy 2880", "gtceu:livermorium 2880", "gtceu:sterling_silver 2880", "gtceu:titanium_tungsten_carbide 2880")
        .itemOutputs("gtlcore:space_drone_mk6")
        .EUt(GTValues.VA[GTValues.OpV])
        .duration(600)
        .addData("SEPMTier", 5)

    gtr.circuit_assembler("gtlcore:magneto_resonatic_circuit_ulv")
        .itemInputs("4x gtceu:tantalum_capacitor", "4x gtceu:resistor", "4x gtceu:inductor", "gtlcore:imprinted_resonatic_circuit_board", "gtceu:magneto_resonatic_gem", "gtceu:vacuum_tube")
        .itemOutputs("4x gtlcore:magneto_resonatic_circuit_ulv")
        .EUt(30)
        .duration(50)

    gtr.circuit_assembler("gtlcore:magneto_resonatic_circuit_lv")
        .itemInputs("4x gtceu:diode", "4x gtceu:capacitor", "4x gtceu:transistor", "gtlcore:imprinted_resonatic_circuit_board", "gtceu:magneto_resonatic_gem", "gtlcore:magneto_resonatic_circuit_ulv")
        .itemOutputs("4x gtlcore:magneto_resonatic_circuit_lv")
        .EUt(120)
        .duration(90)

    gtr.circuit_assembler("gtlcore:magneto_resonatic_circuit_mv")
        .itemInputs("8x gtceu:diode", "8x gtceu:capacitor", "8x gtceu:transistor", "gtlcore:imprinted_resonatic_circuit_board", "gtceu:magneto_resonatic_gem", "gtlcore:magneto_resonatic_circuit_lv")
        .itemOutputs("4x gtlcore:magneto_resonatic_circuit_mv")
        .EUt(480)
        .duration(150)

    gtr.circuit_assembler("gtlcore:magneto_resonatic_circuit_hv")
        .itemInputs("4x gtceu:smd_diode", "4x gtceu:smd_capacitor", "4x gtceu:smd_transistor", "2x gtlcore:imprinted_resonatic_circuit_board", "gtceu:flawless_magneto_resonatic_gem", "gtlcore:magneto_resonatic_circuit_mv")
        .itemOutputs("4x gtlcore:magneto_resonatic_circuit_hv")
        .EUt(1920)
        .duration(230)

    gtr.circuit_assembler("gtlcore:magneto_resonatic_circuit_ev")
        .itemInputs("8x gtceu:smd_diode", "8x gtceu:smd_capacitor", "8x gtceu:smd_transistor", "4x gtlcore:imprinted_resonatic_circuit_board", "gtceu:flawless_magneto_resonatic_gem", "gtlcore:magneto_resonatic_circuit_hv")
        .itemOutputs("4x gtlcore:magneto_resonatic_circuit_ev")
        .EUt(7680)
        .duration(330)

    gtr.circuit_assembler("gtlcore:magneto_resonatic_circuit_iv")
        .itemInputs("4x gtceu:advanced_smd_diode", "4x gtceu:advanced_smd_capacitor", "4x gtceu:advanced_smd_transistor", "4x gtlcore:imprinted_resonatic_circuit_board", "gtceu:flawless_magneto_resonatic_gem", "gtlcore:magneto_resonatic_circuit_ev")
        .itemOutputs("4x gtlcore:magneto_resonatic_circuit_iv")
        .EUt(30720)
        .duration(450)

    gtr.circuit_assembler("gtlcore:magneto_resonatic_circuit_luv")
        .itemInputs("8x gtceu:advanced_smd_diode", "8x gtceu:advanced_smd_capacitor", "8x gtceu:advanced_smd_transistor", "4x gtlcore:imprinted_resonatic_circuit_board", "gtceu:flawless_magneto_resonatic_gem", "gtlcore:magneto_resonatic_circuit_iv")
        .itemOutputs("4x gtlcore:magneto_resonatic_circuit_luv")
        .EUt(122880)
        .duration(570)

    const circuits = [
        ["bioware", "zpm", "luv", 1],
        ["optical", "uv", "zpm", 2],
        ["exotic", "uhv", "uv", 3],
        ["cosmic", "uev", "uhv", 4],
        ["supracausal", "uiv", "uev", 5]
    ]

    circuits.forEach((circuit) => {
        gtr.circuit_assembler("gtlcore:magneto_resonatic_circuit_" + circuit[1])
            .itemInputs("16x gtlcore:smd_diode_" + circuit[0], "16x gtlcore:smd_capacitor_" + circuit[0], "16x gtlcore:smd_transistor_" + circuit[0], "8x gtlcore:imprinted_resonatic_circuit_board", "gtceu:exquisite_magneto_resonatic_gem", "gtlcore:magneto_resonatic_circuit_" + circuit[2])
            .itemOutputs("4x gtlcore:magneto_resonatic_circuit_" + circuit[1])
            .EUt(122880 * (4 ** circuit[3]))
            .duration(570 + (120 + (20 * circuit[3])))
    })

    gtr.circuit_assembler("gtlcore:bioware_circuit_board")
        .itemInputs("32x gtceu:wetware_circuit_board", "8x gtlcore:electricaly_wired_petri_dish", "gtceu:uv_electric_pump", "2x gtceu:luv_sensor", "#gtceu:circuits/luv", "32x gtceu:vanadium_gallium_foil")
        .itemOutputs("32x gtlcore:bioware_circuit_board")
        .inputFluids("gtceu:biohmediumsterilized 1000")
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(2400)
        .cleanroom(CleanroomType.STERILE_CLEANROOM)

    gtr.circuit_assembler("gtlcore:bioware_processor")
        .itemInputs("gtlcore:bioware_processing_core",
            "4x gtceu:qbit_cpu_chip",
            "gtceu:highly_advanced_soc",
            "8x gtlcore:smd_capacitor_bioware",
            "8x gtlcore:smd_transistor_bioware",
            "8x gtceu:fine_naquadah_wire")
        .itemOutputs("4x gtlcore:bioware_processor")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(200)
        .cleanroom(CleanroomType.STERILE_CLEANROOM)

    gtr.circuit_assembler("gtlcore:optical_processor")
        .itemInputs("gtlcore:optical_processing_core",
            "4x gtlcore:optical_ram_chip",
            "gtceu:highly_advanced_soc",
            "8x gtlcore:smd_capacitor_optical",
            "8x gtlcore:smd_transistor_optical",
            "8x gtceu:fine_dubnium_wire")
        .itemOutputs("4x gtlcore:optical_processor")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(200)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.circuit_assembler("gtlcore:exotic_processor")
        .itemInputs("gtlcore:exotic_processing_core",
            "4x gtlcore:exotic_ram_chip",
            "gtceu:highly_advanced_soc",
            "8x gtlcore:smd_capacitor_exotic",
            "8x gtlcore:smd_transistor_exotic",
            "8x gtceu:fine_cinobite_wire")
        .itemOutputs("4x gtlcore:exotic_processor")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(200)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.circuit_assembler("gtlcore:cosmic_processor")
        .itemInputs("gtlcore:cosmic_processing_core",
            "4x gtlcore:cosmic_ram_chip",
            "gtceu:highly_advanced_soc",
            "16x gtlcore:smd_capacitor_cosmic",
            "16x gtlcore:smd_transistor_cosmic",
            "8x gtceu:fine_cinobite_wire")
        .itemOutputs("4x gtlcore:cosmic_processor")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(200)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.circuit_assembler("gtlcore:supracausal_processor")
        .itemInputs("gtlcore:supracausal_processing_core", "4x gtlcore:supracausal_ram_chip", "16x gtlcore:cosmic_processing_unit_core", "gtlcore:microwormhole_generator", "gtlcore:manifold_oscillatory_power_cell", "gtceu:crystalmatrix_plate")
        .itemOutputs("2x gtlcore:supracausal_processor")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(100)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.circuit_assembler("gtlcore:hui_circuit_1")
        .itemInputs("gtceu:fiber_reinforced_printed_circuit_board", "16x gtceu:yellow_garnet_plate", "8x gtceu:soc", "32x gtceu:nor_memory_chip", "8x gtceu:aluminium_single_wire", "gtceu:aluminium_rotor")
        .itemOutputs("gtlcore:hui_circuit_1")
        .EUt(GTValues.VA[GTValues.IV])
        .duration(320)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.precision_assembler("gtlcore:hui_circuit_2")
        .itemInputs("gtlcore:hui_circuit_1", "8x gtceu:blue_topaz_plate", "16x gtceu:nand_memory_chip", "8x gtceu:platinum_single_wire")
        .inputFluids("gtceu:polyethylene 288", "gtceu:vanadium 288", "gtceu:bronze 144", "gtceu:annealed_copper 144")
        .itemOutputs("gtlcore:hui_circuit_2")
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(200)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.precision_assembler("gtlcore:hui_circuit_3")
        .itemInputs("gtlcore:hui_circuit_2", "8x gtceu:sodalite_plate", "gtceu:raw_crystal_chip", "8x gtceu:niobium_titanium_single_wire")
        .inputFluids("gtceu:polyvinyl_chloride 288", "gtceu:yttrium 288", "gtceu:black_steel 144", "gtceu:eglin_steel 144")
        .itemOutputs("gtlcore:hui_circuit_3")
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(200)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.precision_assembler("gtlcore:hui_circuit_4")
        .itemInputs("gtlcore:hui_circuit_3", "8x gtceu:red_garnet_plate", "16x gtceu:qbit_cpu_chip", "8x gtceu:vanadium_gallium_single_wire")
        .inputFluids("gtceu:polytetrafluoroethylene 288", "gtceu:lutetium 288", "gtceu:tantalloy_61 144", "gtceu:hastelloy_n 144")
        .itemOutputs("gtlcore:hui_circuit_4")
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(200)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.precision_assembler("gtlcore:hui_circuit_5")
        .itemInputs("gtlcore:hui_circuit_4", "8x gtceu:opal_plate", "gtceu:neuro_processing_unit", "8x gtceu:yttrium_barium_cuprate_single_wire")
        .inputFluids("gtceu:polybenzimidazole 288", "gtceu:cerium 288", "gtceu:indalloy_140 144", "gtceu:lafium 144")
        .itemOutputs("gtlcore:hui_circuit_5")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(200)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.precision_assembler("gtlcore:improved_superconductor_coil")
        .itemInputs("gtceu:superconducting_coil", "2x gtlcore:special_ceramics", "gtlcore:hui_circuit_1")
        .inputFluids("gtceu:mar_m_200_steel 1152", "gtceu:europium 144")
        .itemOutputs("gtlcore:improved_superconductor_coil")
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(200)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.precision_assembler("gtlcore:compressed_fusion_coil")
        .itemInputs("gtceu:fusion_coil", "gtlcore:inverter", "gtlcore:hui_circuit_2")
        .inputFluids("gtceu:tanmolyium 1152", "gtceu:americium 144")
        .itemOutputs("gtlcore:compressed_fusion_coil")
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(200)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.precision_assembler("gtlcore:advanced_compressed_fusion_coil")
        .itemInputs("gtlcore:compressed_fusion_coil", "gtceu:quantum_star", "gtlcore:hui_circuit_3")
        .inputFluids("gtceu:artherium_sn 1152", "gtceu:mithril 144")
        .itemOutputs("gtlcore:advanced_compressed_fusion_coil")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(200)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.precision_assembler("gtlcore:compressed_fusion_coil_mk2_prototype")
        .itemInputs("gtlcore:advanced_fusion_coil", "gtceu:gravi_star", "gtlcore:hui_circuit_4")
        .inputFluids("gtceu:dalisenite 1152", "gtceu:bohrium 144")
        .itemOutputs("gtlcore:compressed_fusion_coil_mk2_prototype")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(200)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.precision_assembler("gtlcore:compressed_fusion_coil_mk2")
        .itemInputs("gtlcore:fusion_coil_mk2", "gtlcore:unstable_star", "gtlcore:hui_circuit_5")
        .inputFluids("gtceu:cinobite 1152", "gtceu:vibranium 144")
        .itemOutputs("gtlcore:compressed_fusion_coil_mk2")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(200)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.precision_assembler("gtlcore:luv_compressed_fusion_reactor")
        .itemInputs("gtceu:luv_fusion_reactor", "gtlcore:improved_superconductor_coil", "16x gtlcore:hui_circuit_1", "16x gtceu:double_osmiridium_plate")
        .inputFluids("gtceu:niobium_titanium 864", "gtceu:indalloy_140 1152", "gtceu:soldering_alloy 2304", "gtceu:polybenzimidazole 2304")
        .itemOutputs("gtlcore:luv_compressed_fusion_reactor")
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(400)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.precision_assembler("gtlcore:zpm_compressed_fusion_reactor")
        .itemInputs("gtceu:zpm_fusion_reactor", "gtlcore:compressed_fusion_coil", "16x gtlcore:hui_circuit_2", "16x gtceu:double_europium_plate")
        .inputFluids("gtceu:vanadium_gallium 864", "gtceu:indalloy_140 1152", "gtceu:soldering_alloy 2304", "gtceu:polybenzimidazole 2304")
        .itemOutputs("gtlcore:zpm_compressed_fusion_reactor")
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(400)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.precision_assembler("gtlcore:uv_compressed_fusion_reactor")
        .itemInputs("gtceu:uv_fusion_reactor", "gtlcore:advanced_compressed_fusion_coil", "16x gtlcore:hui_circuit_3", "16x gtceu:double_americium_plate")
        .inputFluids("gtceu:yttrium_barium_cuprate 864", "gtceu:indalloy_140 1152", "gtceu:soldering_alloy 2304", "gtceu:polybenzimidazole 2304")
        .itemOutputs("gtlcore:uv_compressed_fusion_reactor")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(400)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.precision_assembler("gtlcore:uhv_compressed_fusion_reactor")
        .itemInputs("gtlcore:uhv_fusion_reactor", "gtlcore:compressed_fusion_coil_mk2_prototype", "16x gtlcore:hui_circuit_4", "16x gtceu:double_orichalcum_plate")
        .inputFluids("gtceu:europium 864", "gtceu:indalloy_140 1152", "gtceu:soldering_alloy 2304", "gtceu:polybenzimidazole 2304")
        .itemOutputs("gtlcore:uhv_compressed_fusion_reactor")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(400)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.precision_assembler("gtlcore:uev_compressed_fusion_reactor")
        .itemInputs("gtlcore:uev_fusion_reactor", "gtlcore:compressed_fusion_coil_mk2", "16x gtlcore:hui_circuit_5", "16x gtceu:double_seaborgium_plate")
        .inputFluids("gtceu:mithril 864", "gtceu:indalloy_140 1152", "gtceu:soldering_alloy 2304", "gtceu:polybenzimidazole 2304")
        .itemOutputs("gtlcore:uev_compressed_fusion_reactor")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(400)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.precision_assembler("gtlcore:annihilation_constrainer")
        .itemInputs("gtlcore:hypercube", "8x gtlcore:contained_reissner_nordstrom_singularity", "4x #gtceu:circuits/uxv", "16x gtceu:cosmicneutronium_foil")
        .inputFluids("gtceu:cinobite 1152", "gtceu:neutronium_doped_nanotubes 2000")
        .itemOutputs("gtlcore:annihilation_constrainer")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(800)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.precision_assembler("gtlcore:neutronium_antimatter_fuel_rod")
        .itemInputs("64x gtlcore:pellet_antimatter", "gtlcore:annihilation_constrainer")
        .inputFluids("gtceu:liquid_hydrogen 200000", "gtceu:zylon 100", "gtceu:neutronium 100")
        .itemOutputs("gtlcore:neutronium_antimatter_fuel_rod")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(2000)
        .cleanroom(GTLCleanroomType.LAW_CLEANROOM)

    gtr.precision_assembler("gtlcore:draconium_antimatter_fuel_rod")
        .itemInputs("64x gtlcore:pellet_antimatter", "64x gtlcore:pellet_antimatter", "gtlcore:annihilation_constrainer")
        .inputFluids("gtceu:liquid_hydrogen 200000", "gtceu:fullerene_polymer_matrix_pulp 100", "gtceu:draconium 100")
        .itemOutputs("gtlcore:draconium_antimatter_fuel_rod")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(2000)
        .cleanroom(GTLCleanroomType.LAW_CLEANROOM)

    gtr.precision_assembler("gtlcore:cosmicneutronium_antimatter_fuel_rod")
        .itemInputs("64x gtlcore:pellet_antimatter", "64x gtlcore:pellet_antimatter", "64x gtlcore:pellet_antimatter", "gtlcore:annihilation_constrainer")
        .inputFluids("gtceu:liquid_hydrogen 200000", "gtceu:radox 100", "gtceu:cosmicneutronium 100")
        .itemOutputs("gtlcore:cosmicneutronium_antimatter_fuel_rod")
        .EUt(GTValues.VA[GTValues.OpV])
        .duration(2000)
        .cleanroom(GTLCleanroomType.LAW_CLEANROOM)

    gtr.precision_assembler("gtlcore:infinity_antimatter_fuel_rod")
        .itemInputs("64x gtlcore:pellet_antimatter", "64x gtlcore:pellet_antimatter", "64x gtlcore:pellet_antimatter", "gtlcore:annihilation_constrainer")
        .inputFluids("gtceu:liquid_hydrogen 200000", "gtceu:heavy_quark_degenerate_matter_plasma 1000", "gtceu:liquid_cosmic_mesh 100", "gtceu:infinity 100")
        .itemOutputs("gtlcore:infinity_antimatter_fuel_rod")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(2000)
        .cleanroom(GTLCleanroomType.LAW_CLEANROOM)

    gtr.precision_assembler("gtlcore:reinforced_echo_shard")
        .itemInputs("4x gtceu:echo_shard_plate", "4x gtlcore:echobone", "2x minecraft:netherite_scrap", "gtceu:double_echoite_plate")
        .inputFluids("gtceu:liquid_hydrogen 8000", "gtceu:echoite_plasma 1000")
        .itemOutputs("gtlcore:reinforced_echo_shard")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(200)
        .cleanroom(GTLCleanroomType.LAW_CLEANROOM)

    gtr.precision_assembler("gtlcore:optical_soc")
        .itemInputs("gtlcore:optical_soc_containment_housing", "gtlcore:optical_slice", "8x gtceu:gold_bolt", "8x gtceu:fine_zinc_wire")
        .inputFluids("gtceu:lumiium 144", "gtceu:mutated_living_solder 144", "gtceu:soldering_alloy 288", "gtceu:helium 100")
        .itemOutputs("gtlcore:optical_soc")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(400)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.precision_assembler("gtlcore:x_ray_laser")
        .itemInputs("gtlcore:x_ray_waveguide", "gtlcore:microfocus_x_ray_tube", "gtceu:exquisite_jasper_gem", "gtlcore:x_ray_mirror_plate")
        .itemOutputs("gtlcore:x_ray_laser")
        .inputFluids("gtceu:mutated_living_solder 144", "gtceu:soldering_alloy 288", "gtceu:iridium 144", "gtceu:californium_cyclopentadienide 10")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(320)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.precision_assembler("gtlcore:rydberg_spinorial_assembly")
        .itemInputs("gtlcore:cryogenic_interface",
            "gtlcore:rotating_transparent_surface",
            "gtlcore:exotic_chip",
            "gtlcore:x_ray_waveguide")
        .notConsumableFluid("gtceu:xenon 10")
        .inputFluids("gtceu:quantum_dots 10", "gtceu:zylon 144", "gtceu:liquid_hydrogen 10")
        .itemOutputs("gtlcore:rydberg_spinorial_assembly")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(560)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.precision_assembler("gtlcore:lithography_mask")
        .itemInputs("64x gtceu:fine_borosilicate_glass_wire", "16x gtceu:polytetrafluoroethylene_foil")
        .inputFluids("gtceu:polyethylene 288", "gtceu:polytetrafluoroethylene 288", "gtceu:polycaprolactam 288", "gtceu:polyvinyl_butyral 288")
        .itemOutputs("gtlcore:lithography_mask")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(1200)
        .cleanroom(CleanroomType.STERILE_CLEANROOM)

    gtr.precision_assembler("gtlcore:cosmic_processing_unit_core")
        .itemInputs("6x gtceu:fine_heavy_quark_degenerate_matter_wire", "4x gtlcore:cosmic_soc", "3x gtceu:degenerate_rhenium_plate", "gtlcore:empty_laser_cooling_container")
        .inputFluids("gtceu:cosmic_computing_mixture 1000", "gtceu:cosmic_superconductor 1000", "gtceu:fullerene_polymer_matrix_pulp 288", "gtceu:quantum_dots 100")
        .itemOutputs("gtlcore:cosmic_processing_unit_core")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(3500)
        .cleanroom(GTLCleanroomType.LAW_CLEANROOM)

    gtr.precision_assembler("gtlcore:topological_manipulator_unit")
        .itemInputs("2x gtlcore:quantumchromodynamic_protective_plating", "gtlcore:contained_kerr_newmann_singularity", "gtlcore:microwormhole_generator", "gtceu:uhv_field_generator")
        .inputFluids("gtceu:antineutron 10", "gtceu:neutronium 144", "gtceu:arceusalloy2b 144", "gtceu:nitrogen 10000")
        .itemOutputs("gtlcore:topological_manipulator_unit")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(1800)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.precision_assembler("gtlcore:ctc_guidance_unit")
        .itemInputs("64x gtlcore:cosmic_ram_chip", "gtlcore:supracausal_processing_core", "gtceu:data_module", "gtlcore:nuclear_clock")
        .inputFluids("gtceu:arceusalloy2b 1296", "gtceu:super_mutated_living_solder 1296", "gtceu:trinium_titanium 1296", "gtceu:vibranium 1296")
        .itemOutputs("gtlcore:ctc_guidance_unit")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(1600)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.precision_assembler("gtlcore:bioware_boule")
        .itemInputs("gtceu:neutronium_wafer", "16x gtlcore:biological_cells", "gtceu:small_actinium_dust", "gtceu:small_strontium_dust")
        .inputFluids("gtceu:biohmediumsterilized 1000", "gtceu:lubricant 1000", "gtceu:nitrogen 10000")
        .itemOutputs("gtlcore:bioware_boule")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(600)
        .cleanroom(CleanroomType.STERILE_CLEANROOM)

    gtr.precision_assembler("gtlcore:machine_casing_grinding_head")
        .itemInputs("gtceu:europium_frame", "8x gtlcore:reinforced_echo_shard", "6x gtceu:tungsten_grinding_head", "36x gtceu:double_hsse_plate")
        .inputFluids("gtceu:annealed_copper 1440", "gtceu:invar 1440", "gtceu:nickel_zinc_ferrite 1440", "gtceu:osmiridium 1440")
        .itemOutputs("gtlcore:machine_casing_grinding_head")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(1600)
        .cleanroom(GTLCleanroomType.LAW_CLEANROOM)

    gtr.precision_assembler("gtlcore:bedrock_drill")
        .itemInputs("gtlcore:reinforced_echo_shard", "minecraft:bedrock", "gtceu:neutronium_buzz_saw_blade", "4x gtceu:double_neutronium_plate")
        .inputFluids("gtceu:rhodium 576", "gtceu:hastelloy_x 576", "gtceu:hsss 576", "gtceu:hsse 576")
        .itemOutputs("gtlcore:bedrock_drill")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(1600)
        .cleanroom(GTLCleanroomType.LAW_CLEANROOM)

    gtr.precision_assembler("gtlcore:power_core")
        .itemInputs("4x gtlcore:power_module", "8x gtceu:uv_field_generator", "64x gtceu:gravitation_engine_unit", "16x gtceu:double_naquadria_plate")
        .inputFluids("gtceu:rhodium 2880", "gtceu:americium 2880", "gtceu:enriched_naquadah 2880", "gtceu:trinium 2880")
        .itemOutputs("gtlcore:power_core")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(2400)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.precision_assembler("gtlcore:dyson_swarm_module")
        .itemInputs("16x gtceu:enriched_naquadah_frame", "64x gtceu:solar_panel", "gtceu:uev_sensor", "gtceu:uev_emitter")
        .inputFluids("gtceu:mutated_living_solder 20000", "kubejs:gelid_cryotheum 20000", "gtceu:neutronium 18432", "gtceu:orichalcum 18432")
        .itemOutputs("64x gtlcore:dyson_swarm_module")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(800)
        .cleanroom(GTLCleanroomType.LAW_CLEANROOM)

    gtr.precision_assembler("gtlcore:dyson_control_casing")
        .itemInputs("gtceu:uiv_machine_hull", "gtlcore:exotic_processing_core", "#gtceu:circuits/uiv", "gtceu:high_performance_computation_array")
        .inputFluids("gtceu:mutated_living_solder 576", "gtceu:pcb_coolant 2000", "gtceu:ruthenium 2304", "gtceu:naquadah 1296")
        .itemOutputs("gtlcore:dyson_control_casing")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(400)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.precision_assembler("gtlcore:dyson_receiver_casing")
        .itemInputs("gtceu:uiv_charger_4x", "2x gtlcore:pm_chip", "4x gtlcore:uiv_voltage_coil", "gtceu:echoite_quadruple_wire")
        .inputFluids("gtceu:mutated_living_solder 1296", "kubejs:gelid_cryotheum 576", "gtceu:echo_shard 2304", "gtceu:infuscolium 1296")
        .itemOutputs("gtlcore:dyson_receiver_casing")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(400)
        .cleanroom(CleanroomType.CLEANROOM)

    for (let tier = 1; tier < GTValues.MAX; tier++) {
        gtr.assembler("gtlcore:huge_input_hatch_" + GTValues.VN[tier].toLowerCase())
            .itemInputs(GTMachines.FLUID_IMPORT_HATCH[tier].asStack())
            .itemInputs((tier > GTValues.EV ? GTMachines.QUANTUM_TANK[tier].asStack() : GTMachines.SUPER_TANK[tier].asStack()))
            .inputFluids("gtceu:soldering_alloy 144")
            .itemOutputs(GTLMachines.HUGE_FLUID_IMPORT_HATCH[tier].asStack())
            .duration(200)
            .EUt(GTValues.VA[tier])

        gtr.assembler("gtlcore:huge_output_hatch_" + GTValues.VN[tier].toLowerCase())
            .itemInputs(GTMachines.FLUID_EXPORT_HATCH[tier].asStack())
            .itemInputs((tier > GTValues.EV ? GTMachines.QUANTUM_TANK[tier].asStack() : GTMachines.SUPER_TANK[tier].asStack()))
            .inputFluids("gtceu:soldering_alloy 144")
            .itemOutputs(GTLMachines.HUGE_FLUID_EXPORT_HATCH[tier].asStack())
            .duration(200)
            .EUt(GTValues.VA[tier])
    }

    const wireless_tiers = [
        [0, "uhv", "neutronium", "europium", "gtlcore:nm_chip", "8x gtlcore:smd_inductor_bioware"],
        [1, "uev", "quantanium", "mithril", "gtlcore:nm_chip", "8x gtlcore:smd_inductor_optical"],
        [2, "uiv", "adamantium", "neutronium", "gtlcore:pm_chip", "8x gtlcore:smd_inductor_exotic"],
        [3, "uxv", "vibranium", "taranium", "gtlcore:pm_chip", "8x gtlcore:smd_inductor_cosmic"],
        [4, "opv", "draconium", "crystalmatrix", "gtlcore:fm_chip", "8x gtlcore:smd_inductor_supracausal"]
    ]
    wireless_tiers.forEach((tier) => {
        let soldering = tier[0] < 3 ? "gtceu:mutated_living_solder 144" : "gtceu:super_mutated_living_solder 144"
        gtr.assembler(`gtmthings:${tier[1]}_wireless_energy_receive_cover`)
            .itemInputs(`gtceu:${tier[1]}_sensor`,
                `gtceu:${tier[1]}_emitter`,
                "4x gtceu:ender_pearl_plate",
                "2x #gtceu:circuits/" + tier[1],
                `gtlcore:${tier[1]}_voltage_coil`,
                tier[4],
                `2x gtceu:${tier[3]}_single_cable`,
                "2x gtceu:red_alloy_single_cable",
                `4x gtceu:${tier[2]}_plate`)
            .inputFluids(soldering)
            .itemOutputs(`gtmthings:${tier[1]}_wireless_energy_receive_cover`)
            .EUt(GTValues.VA[tier[0] + 9])
            .duration(200)
        gtr.assembler(`gtmthings:${tier[1]}_4a_wireless_energy_receive_cover`)
            .itemInputs(`2x gtmthings:${tier[1]}_wireless_energy_receive_cover`,
                tier[5],
                `4x gtceu:niobium_titanium_quadruple_cable`,
                `2x gtlcore:${tier[1]}_voltage_coil`,
                "2x gtceu:double_battery_alloy_plate")
            .inputFluids(soldering)
            .itemOutputs(`gtmthings:${tier[1]}_4a_wireless_energy_receive_cover`)
            .EUt(GTValues.VA[tier[0] + 9])
            .duration(200)
    })

    gtr.assembler("gtlcore:max_wireless_energy_receive_cover")
        .itemInputs("gtlcore:max_sensor",
            "gtlcore:max_emitter",
            "4x gtceu:ender_pearl_plate",
            "2x #gtceu:circuits/max",
            "gtlcore:max_voltage_coil",
            "gtlcore:fm_chip",
            "2x gtceu:cosmicneutronium_single_cable",
            "2x gtceu:red_alloy_single_cable",
            "4x gtceu:chaos_plate")
        .inputFluids("gtceu:super_mutated_living_solder 144")
        .itemOutputs("gtlcore:max_wireless_energy_receive_cover")
        .EUt(GTValues.VA[14])
        .duration(200)

    gtr.assembler("gtlcore:max_4a_wireless_energy_receive_cover")
        .itemInputs("2x gtlcore:max_wireless_energy_receive_cover",
            "8x gtceu:shirabon_foil",
            "4x gtceu:niobium_titanium_quadruple_cable",
            "2x gtlcore:max_voltage_coil",
            "2x gtceu:double_battery_alloy_plate")
        .inputFluids("gtceu:super_mutated_living_solder 144")
        .itemOutputs("gtlcore:max_4a_wireless_energy_receive_cover")
        .EUt(GTValues.VA[14])
        .duration(200)

    gtr.assembler(`gtlcore:max_16384a_wireless_laser_target_hatch`)
        .itemInputs(`gtlcore:max_16384a_laser_target_hatch`,
            `16x gtlcore:max_4a_wireless_energy_receive_cover`,
            "gtceu:active_transformer",
            "gtceu:superconducting_coil",
            "2x gtceu:high_power_casing",
            "4x gtceu:normal_laser_pipe",
            "gtceu:advanced_energy_detector_cover")
        .inputFluids("gtceu:soldering_alloy 144")
        .itemOutputs(`gtmthings:max_16384a_wireless_laser_target_hatch`)
        .EUt(GTValues.VA[14])
        .duration(200)

    gtr.assembler(`gtlcore:max_16384a_wireless_laser_source_hatch`)
        .itemInputs(`gtlcore:max_16384a_laser_source_hatch`,
            `16x gtlcore:max_4a_wireless_energy_receive_cover`,
            "gtceu:active_transformer",
            "gtceu:superconducting_coil",
            "2x gtceu:high_power_casing",
            "4x gtceu:normal_laser_pipe",
            "gtceu:advanced_energy_detector_cover")
        .inputFluids("gtceu:soldering_alloy 144")
        .itemOutputs(`gtmthings:max_16384a_wireless_laser_source_hatch`)
        .EUt(GTValues.VA[14])
        .duration(200)

    gtr.assembler(`gtlcore:max_65536a_wireless_laser_target_hatch`)
        .itemInputs(`gtlcore:max_65536a_laser_target_hatch`,
            `16x gtlcore:max_4a_wireless_energy_receive_cover`,
            "gtceu:active_transformer",
            "2x gtceu:superconducting_coil",
            "2x gtceu:high_power_casing",
            "8x gtceu:normal_laser_pipe",
            "gtceu:advanced_energy_detector_cover")
        .inputFluids("gtceu:soldering_alloy 144")
        .itemOutputs(`gtmthings:max_65536a_wireless_laser_target_hatch`)
        .EUt(GTValues.VA[14])
        .duration(200)

    gtr.assembler(`gtlcore:max_65536a_wireless_laser_source_hatch`)
        .itemInputs(`gtlcore:max_65536a_laser_source_hatch`,
            `16x gtlcore:max_4a_wireless_energy_receive_cover`,
            "gtceu:active_transformer",
            "2x gtceu:superconducting_coil",
            "2x gtceu:high_power_casing",
            "8x gtceu:normal_laser_pipe",
            "gtceu:advanced_energy_detector_cover")
        .inputFluids("gtceu:soldering_alloy 144")
        .itemOutputs(`gtmthings:max_65536a_wireless_laser_source_hatch`)
        .EUt(GTValues.VA[14])
        .duration(200)

    gtr.assembler(`gtlcore:max_262144a_wireless_laser_target_hatch`)
        .itemInputs(`gtlcore:max_262144a_laser_target_hatch`,
            `16x gtlcore:max_4a_wireless_energy_receive_cover`,
            "2x gtceu:active_transformer",
            "2x gtceu:superconducting_coil",
            "2x gtceu:high_power_casing",
            "16x gtceu:normal_laser_pipe",
            "gtceu:advanced_energy_detector_cover")
        .inputFluids("gtceu:soldering_alloy 144")
        .itemOutputs(`gtlcore:max_262144a_wireless_laser_target_hatch`)
        .EUt(GTValues.VA[14])
        .duration(200)

    gtr.assembler(`gtlcore:max_262144a_wireless_laser_source_hatch`)
        .itemInputs(`gtlcore:max_262144a_laser_source_hatch`,
            `16x gtlcore:max_4a_wireless_energy_receive_cover`,
            "2x gtceu:active_transformer",
            "2x gtceu:superconducting_coil",
            "2x gtceu:high_power_casing",
            "16x gtceu:normal_laser_pipe",
            "gtceu:advanced_energy_detector_cover")
        .inputFluids("gtceu:soldering_alloy 144")
        .itemOutputs(`gtlcore:max_262144a_wireless_laser_source_hatch`)
        .EUt(GTValues.VA[14])
        .duration(200)


    gtr.assembler(`gtlcore:max_1048576a_wireless_laser_target_hatch`)
        .itemInputs(`gtlcore:max_1048576a_laser_target_hatch`,
            `16x gtlcore:max_4a_wireless_energy_receive_cover`,
            "2x gtceu:active_transformer",
            "4x gtceu:superconducting_coil",
            "2x gtceu:high_power_casing",
            "32x gtceu:normal_laser_pipe",
            "4x gtlcore:molecular_coil",
            "gtceu:advanced_energy_detector_cover")
        .inputFluids("gtceu:soldering_alloy 144")
        .itemOutputs(`gtlcore:max_1048576a_wireless_laser_target_hatch`)
        .EUt(GTValues.VA[14])
        .duration(200)

    gtr.assembler(`gtlcore:max_1048576a_wireless_laser_source_hatch`)
        .itemInputs(`gtlcore:max_1048576a_laser_source_hatch`,
            `16x gtlcore:max_4a_wireless_energy_receive_cover`,
            "2x gtceu:active_transformer",
            "4x gtceu:superconducting_coil",
            "2x gtceu:high_power_casing",
            "32x gtceu:normal_laser_pipe",
            "4x gtlcore:molecular_coil",
            "gtceu:advanced_energy_detector_cover")
        .inputFluids("gtceu:soldering_alloy 144")
        .itemOutputs(`gtlcore:max_1048576a_wireless_laser_source_hatch`)
        .EUt(GTValues.VA[14])
        .duration(200)

    gtr.assembler(`gtlcore:max_4194304a_wireless_laser_target_hatch`)
        .itemInputs(`gtlcore:max_4194304a_laser_target_hatch`,
            `16x gtlcore:max_4a_wireless_energy_receive_cover`,
            "2x gtceu:active_transformer",
            "8x gtceu:superconducting_coil",
            "2x gtceu:high_power_casing",
            "32x gtceu:normal_laser_pipe",
            "8x gtlcore:molecular_coil",
            "gtceu:advanced_energy_detector_cover")
        .inputFluids("gtceu:soldering_alloy 144")
        .itemOutputs(`gtlcore:max_4194304a_wireless_laser_target_hatch`)
        .EUt(GTValues.VA[14])
        .duration(200)

    gtr.assembler(`gtlcore:max_4194304a_wireless_laser_source_hatch`)
        .itemInputs(`gtlcore:max_4194304a_laser_source_hatch`,
            `16x gtlcore:max_4a_wireless_energy_receive_cover`,
            "2x gtceu:active_transformer",
            "8x gtceu:superconducting_coil",
            "2x gtceu:high_power_casing",
            "32x gtceu:normal_laser_pipe",
            "8x gtlcore:molecular_coil",
            "gtceu:advanced_energy_detector_cover")
        .inputFluids("gtceu:soldering_alloy 144")
        .itemOutputs(`gtlcore:max_4194304a_wireless_laser_source_hatch`)
        .EUt(GTValues.VA[14])
        .duration(200)

    for (let index = 5; index < 14; index++) {
        let tierName = GTValues.VN[index].toLowerCase()
        gtr.assembler(`gtlcore:${tierName}_16384a_wireless_laser_target_hatch`)
            .itemInputs(`gtlcore:${tierName}_16384a_laser_target_hatch`,
                `16x gtmthings:${tierName}_4a_wireless_energy_receive_cover`,
                "gtceu:active_transformer",
                "gtceu:superconducting_coil",
                "2x gtceu:high_power_casing",
                "4x gtceu:normal_laser_pipe",
                "gtceu:advanced_energy_detector_cover")
            .inputFluids("gtceu:soldering_alloy 144")
            .itemOutputs(`gtmthings:${tierName}_16384a_wireless_laser_target_hatch`)
            .EUt(GTValues.VA[index])
            .duration(200)

        gtr.assembler(`gtlcore:${tierName}_16384a_wireless_laser_source_hatch`)
            .itemInputs(`gtlcore:${tierName}_16384a_laser_source_hatch`,
                `16x gtmthings:${tierName}_4a_wireless_energy_receive_cover`,
                "gtceu:active_transformer",
                "gtceu:superconducting_coil",
                "2x gtceu:high_power_casing",
                "4x gtceu:normal_laser_pipe",
                "gtceu:advanced_energy_detector_cover")
            .inputFluids("gtceu:soldering_alloy 144")
            .itemOutputs(`gtmthings:${tierName}_16384a_wireless_laser_source_hatch`)
            .EUt(GTValues.VA[index])
            .duration(200)

        gtr.assembler(`gtlcore:${tierName}_65536a_wireless_laser_target_hatch`)
            .itemInputs(`gtlcore:${tierName}_65536a_laser_target_hatch`,
                `16x gtmthings:${tierName}_4a_wireless_energy_receive_cover`,
                "gtceu:active_transformer",
                "2x gtceu:superconducting_coil",
                "2x gtceu:high_power_casing",
                "8x gtceu:normal_laser_pipe",
                "gtceu:advanced_energy_detector_cover")
            .inputFluids("gtceu:soldering_alloy 144")
            .itemOutputs(`gtmthings:${tierName}_65536a_wireless_laser_target_hatch`)
            .EUt(GTValues.VA[index])
            .duration(200)

        gtr.assembler(`gtlcore:${tierName}_65536a_wireless_laser_source_hatch`)
            .itemInputs(`gtlcore:${tierName}_65536a_laser_source_hatch`,
                `16x gtmthings:${tierName}_4a_wireless_energy_receive_cover`,
                "gtceu:active_transformer",
                "2x gtceu:superconducting_coil",
                "2x gtceu:high_power_casing",
                "8x gtceu:normal_laser_pipe",
                "gtceu:advanced_energy_detector_cover")
            .inputFluids("gtceu:soldering_alloy 144")
            .itemOutputs(`gtmthings:${tierName}_65536a_wireless_laser_source_hatch`)
            .EUt(GTValues.VA[index])
            .duration(200)

        gtr.assembler(`gtlcore:${tierName}_262144a_wireless_laser_target_hatch`)
            .itemInputs(`gtlcore:${tierName}_262144a_laser_target_hatch`,
                `16x gtmthings:${tierName}_4a_wireless_energy_receive_cover`,
                "2x gtceu:active_transformer",
                "2x gtceu:superconducting_coil",
                "2x gtceu:high_power_casing",
                "16x gtceu:normal_laser_pipe",
                "gtceu:advanced_energy_detector_cover")
            .inputFluids("gtceu:soldering_alloy 144")
            .itemOutputs(`gtlcore:${tierName}_262144a_wireless_laser_target_hatch`)
            .EUt(GTValues.VA[index])
            .duration(200)

        gtr.assembler(`gtlcore:${tierName}_262144a_wireless_laser_source_hatch`)
            .itemInputs(`gtlcore:${tierName}_262144a_laser_source_hatch`,
                `16x gtmthings:${tierName}_4a_wireless_energy_receive_cover`,
                "2x gtceu:active_transformer",
                "2x gtceu:superconducting_coil",
                "2x gtceu:high_power_casing",
                "16x gtceu:normal_laser_pipe",
                "gtceu:advanced_energy_detector_cover")
            .inputFluids("gtceu:soldering_alloy 144")
            .itemOutputs(`gtlcore:${tierName}_262144a_wireless_laser_source_hatch`)
            .EUt(GTValues.VA[index])
            .duration(200)


        gtr.assembler(`gtlcore:${tierName}_1048576a_wireless_laser_target_hatch`)
            .itemInputs(`gtlcore:${tierName}_1048576a_laser_target_hatch`,
                `16x gtmthings:${tierName}_4a_wireless_energy_receive_cover`,
                "2x gtceu:active_transformer",
                "4x gtceu:superconducting_coil",
                "2x gtceu:high_power_casing",
                "32x gtceu:normal_laser_pipe",
                "4x gtlcore:molecular_coil",
                "gtceu:advanced_energy_detector_cover")
            .inputFluids("gtceu:soldering_alloy 144")
            .itemOutputs(`gtlcore:${tierName}_1048576a_wireless_laser_target_hatch`)
            .EUt(GTValues.VA[index])
            .duration(200)

        gtr.assembler(`gtlcore:${tierName}_1048576a_wireless_laser_source_hatch`)
            .itemInputs(`gtlcore:${tierName}_1048576a_laser_source_hatch`,
                `16x gtmthings:${tierName}_4a_wireless_energy_receive_cover`,
                "2x gtceu:active_transformer",
                "4x gtceu:superconducting_coil",
                "2x gtceu:high_power_casing",
                "32x gtceu:normal_laser_pipe",
                "4x gtlcore:molecular_coil",
                "gtceu:advanced_energy_detector_cover")
            .inputFluids("gtceu:soldering_alloy 144")
            .itemOutputs(`gtlcore:${tierName}_1048576a_wireless_laser_source_hatch`)
            .EUt(GTValues.VA[index])
            .duration(200)

        gtr.assembler(`gtlcore:${tierName}_4194304a_wireless_laser_target_hatch`)
            .itemInputs(`gtlcore:${tierName}_4194304a_laser_target_hatch`,
                `16x gtmthings:${tierName}_4a_wireless_energy_receive_cover`,
                "2x gtceu:active_transformer",
                "8x gtceu:superconducting_coil",
                "2x gtceu:high_power_casing",
                "32x gtceu:normal_laser_pipe",
                "8x gtlcore:molecular_coil",
                "gtceu:advanced_energy_detector_cover")
            .inputFluids("gtceu:soldering_alloy 144")
            .itemOutputs(`gtlcore:${tierName}_4194304a_wireless_laser_target_hatch`)
            .EUt(GTValues.VA[index])
            .duration(200)

        gtr.assembler(`gtlcore:${tierName}_4194304a_wireless_laser_source_hatch`)
            .itemInputs(`gtlcore:${tierName}_4194304a_laser_source_hatch`,
                `16x gtmthings:${tierName}_4a_wireless_energy_receive_cover`,
                "2x gtceu:active_transformer",
                "8x gtceu:superconducting_coil",
                "2x gtceu:high_power_casing",
                "32x gtceu:normal_laser_pipe",
                "8x gtlcore:molecular_coil",
                "gtceu:advanced_energy_detector_cover")
            .inputFluids("gtceu:soldering_alloy 144")
            .itemOutputs(`gtlcore:${tierName}_4194304a_wireless_laser_source_hatch`)
            .EUt(GTValues.VA[index])
            .duration(200)
    }

    const lasers = [["iv", "4x gtceu:platinum_single_cable", 7680],
    ["luv", "4x gtceu:niobium_titanium_single_cable", 30720],
    ["zpm", "4x gtceu:vanadium_gallium_single_cable", 122880],
    ["uv", "4x gtceu:yttrium_barium_cuprate_single_cable", 491520],
    ["uhv", "4x gtceu:europium_single_cable", 1966080],
    ["uev", "4x gtceu:mithril_single_cable", 7864320],
    ["uiv", "4x gtceu:neutronium_single_cable", 34257280],
    ["uxv", "4x gtceu:taranium_single_cable", 125829120],
    ["opv", "4x gtceu:crystalmatrix_single_cable", 503316480]]

    lasers.forEach(laser => {
        for (let index = 0; index < 5; index++) {
            gtr.assembler("gtlcore:" + laser[0] + "_" + 16384 * (4 ** index) + "a_laser_target_hatch")
                .itemInputs("gtceu:" + laser[0] + "_machine_hull",
                    8 * (2 ** index) + "x gtceu:diamond_lens",
                    8 * (2 ** index) + "x gtceu:" + laser[0] + "_sensor",
                    8 * (2 ** index) + "x gtceu:" + laser[0] + "_electric_pump",
                    laser[1])
                .itemOutputs("gtlcore:" + laser[0] + "_" + 16384 * (4 ** index) + "a_laser_target_hatch")
                .circuit(4 + index)
                .EUt(laser[2])
                .duration(2400 * (2 ** index))

            gtr.assembler("gtlcore:" + laser[0] + "_" + 16384 * (4 ** index) + "a_laser_source_hatch")
                .itemInputs("gtceu:" + laser[0] + "_machine_hull",
                    8 * (2 ** index) + "x gtceu:diamond_lens",
                    8 * (2 ** index) + "x gtceu:" + laser[0] + "_emitter",
                    8 * (2 ** index) + "x gtceu:" + laser[0] + "_electric_pump",
                    laser[1])
                .itemOutputs("gtlcore:" + laser[0] + "_" + 16384 * (4 ** index) + "a_laser_source_hatch")
                .circuit(4 + index)
                .EUt(laser[2])
                .duration(2400 * (2 ** index))
        }
    })
    for (let index = 0; index < 8; index++) {
        gtr.assembler("gtlcore:max_" + 256 * (4 ** index) + "a_laser_target_hatch")
            .itemInputs("gtceu:max_machine_hull",
                (2 ** index) + "x gtceu:diamond_lens",
                (2 ** index) + "x gtlcore:max_sensor",
                (2 ** index) + "x gtlcore:max_electric_pump",
                "4x gtceu:cosmicneutronium_single_cable")
            .itemOutputs("gtlcore:max_" + 256 * (4 ** index) + "a_laser_target_hatch")
            .circuit(1 + index)
            .EUt(GTValues.VA[GTValues.MAX])
            .duration(300 * (2 ** index))

        gtr.assembler("gtlcore:max_" + 256 * (4 ** index) + "a_laser_source_hatch")
            .itemInputs("gtceu:max_machine_hull",
                (2 ** index) + "x gtceu:diamond_lens",
                (2 ** index) + "x gtlcore:max_emitter",
                (2 ** index) + "x gtlcore:max_electric_pump",
                "4x gtceu:cosmicneutronium_single_cable")
            .itemOutputs("gtlcore:max_" + 256 * (4 ** index) + "a_laser_source_hatch")
            .circuit(1 + index)
            .EUt(GTValues.VA[GTValues.MAX])
            .duration(300 * (2 ** index))
    }

    const coils = [
        ["uhv", "1966080", "abyssalalloy", "europium", "tritanium"],
        ["uev", "7864320", "titansteel", "mithril", "abyssalalloy"]
    ]
    coils.forEach((coil) => {
        gtr.assembler("gtlcore:" + coil[0] + "_voltage_coil")
            .itemInputs("gtlcore:magnetic_netherite_rod", "16x #forge:fine_wires/" + coil[2])
            .itemOutputs("gtlcore:" + coil[0] + "_voltage_coil")
            .EUt(coil[1])
            .duration(200)
            .circuit(1)
        gtr.assembler("gtlcore:" + coil[2] + "_coil_block")
            .itemInputs("8x gtceu:" + coil[2] + "_double_wire", "8x gtceu:" + coil[3] + "_foil")
            .inputFluids("gtceu:" + coil[4] + " 144")
            .itemOutputs("gtlcore:" + coil[2] + "_coil_block")
            .EUt(coil[1])
            .duration(800)
    })
    const coilas = [
        ["uiv", "31457280", "adamantine", "neutronium", "titansteel"],
        ["uxv", "125829120", "naquadriatictaranium", "taranium", "adamantine"],
        ["opv", "503316480", "starmetal", "crystalmatrix", "naquadriatictaranium"]
    ]
    coilas.forEach((coil) => {
        gtr.assembler("gtlcore:" + coil[0] + "_voltage_coil")
            .itemInputs("gtceu:attuned_tengam_rod", "16x #forge:fine_wires/" + coil[2])
            .itemOutputs("gtlcore:" + coil[0] + "_voltage_coil")
            .EUt(coil[1])
            .duration(200)
            .circuit(1)
        gtr.assembler("gtlcore:" + coil[2] + "_coil_block")
            .itemInputs("8x gtceu:" + coil[2] + "_double_wire", "8x gtceu:" + coil[3] + "_foil")
            .inputFluids("gtceu:" + coil[4] + " 144")
            .itemOutputs("gtlcore:" + coil[2] + "_coil_block")
            .EUt(coil[1])
            .duration(800)
    })
    gtr.assembler("gtlcore:max_voltage_coil")
        .itemInputs("gtceu:attuned_tengam_rod", "16x #forge:fine_wires/cosmicneutronium")
        .itemOutputs("gtlcore:max_voltage_coil")
        .EUt(2013265920)
        .duration(200)
        .circuit(1)

    const robots = [["uv", "1", "uhv", "1966080"], ["uhv", "2", "uev", "7864320"], ["uev", "3", "uiv", "31457280"], ["uiv", "4", "uxv", "125829120"], ["uxv", "5", "opv", "503316480"]]

    robots.forEach((robot) => {
        gtr.assembler("gtlcore:precision_circuit_assembly_robot_mk" + robot[1])
            .itemInputs("2x gtceu:" + robot[0] + "_robot_arm", "gtceu:" + robot[0] + "_sensor", "4x #gtceu:circuits/" + robot[2], "gtceu:silver_nanoswarm", "2x gtceu:pikyonium_plate")
            .inputFluids("gtceu:soldering_alloy 1440")
            .itemOutputs("gtlcore:precision_circuit_assembly_robot_mk" + robot[1])
            .EUt(robot[3])
            .duration(400)
    })

    gtr.assembler("gtlcore:inverter")
        .itemInputs("4x gtceu:polyethylene_plate", "4x gtceu:ilc_chip", "2x gtceu:exquisite_quartzite_gem", "gtceu:computer_monitor_cover", "#gtceu:circuits/ev", "4x gtceu:diode", "8x gtceu:aluminium_single_wire")
        .inputFluids("gtceu:soldering_alloy 144")
        .itemOutputs("gtlcore:inverter")
        .EUt(120)
        .duration(200)

    tiers.forEach(i => {
        gtr.assembler("gtlcore:" + i[0] + "_neutron_accelerator")
            .itemInputs("gtceu:" + i[0] + "_machine_hull", "gtlcore:inverter", i[1] === 0 ? "2x gtceu:lead_rotor" : "2x gtceu:" + i[0] + "_electric_motor", "gtceu:double_beryllium_plate", "2x gtceu:polyvinyl_chloride_plate")
            .itemOutputs("gtlcore:" + i[0] + "_neutron_accelerator")
            .inputFluids("gtceu:polonium 288")
            .EUt(30)
            .duration(400)
    })

    gtr.assembler("gtlcore:ulv_huge_item_import_bus")
        .inputFluids("gtceu:soldering_alloy 144")
        .itemInputs("gtceu:ulv_input_bus", "gtlcore:primitive_robot_arm", "gtceu:bronze_crate", "4x #gtceu:circuits/ulv", "4x gtceu:wrought_iron_plate")
        .itemOutputs("gtmthings:ulv_huge_item_import_bus")
        .EUt(7)
        .duration(200)

    gtr.assembler("gtlcore:ulv_huge_item_export_bus")
        .inputFluids("gtceu:soldering_alloy 144")
        .itemInputs("gtceu:ulv_output_bus", "gtlcore:primitive_robot_arm", "gtceu:bronze_crate", "4x #gtceu:circuits/ulv", "4x gtceu:wrought_iron_plate")
        .itemOutputs("gtmthings:ulv_huge_item_export_bus")
        .EUt(7)
        .duration(200)

    gtr.assembler("gtlcore:magnetohydrodynamicallyconstrainedstarmatter_helmet")
        .notConsumable("gtceu:spacetime_nanoswarm")
        .notConsumable("gtceu:cosmicneutronium_nanoswarm")
        .itemInputs("50x gtceu:magnetohydrodynamicallyconstrainedstarmatter_ingot", "gtlcore:command_block_core")
        .itemOutputs("kubejs:magnetohydrodynamicallyconstrainedstarmatter_helmet")
        .EUt(65536 * GTValues.VA[GTValues.MAX])
        .circuit(1)
        .duration(200)

    gtr.assembler("gtlcore:magnetohydrodynamicallyconstrainedstarmatter_chestplate")
        .notConsumable("gtceu:spacetime_nanoswarm")
        .notConsumable("gtceu:cosmicneutronium_nanoswarm")
        .itemInputs("80x gtceu:magnetohydrodynamicallyconstrainedstarmatter_ingot", "gtlcore:command_block_core")
        .itemOutputs("kubejs:magnetohydrodynamicallyconstrainedstarmatter_chestplate")
        .EUt(65536 * GTValues.VA[GTValues.MAX])
        .circuit(2)
        .duration(200)

    gtr.assembler("gtlcore:magnetohydrodynamicallyconstrainedstarmatter_leggings")
        .notConsumable("gtceu:spacetime_nanoswarm")
        .notConsumable("gtceu:cosmicneutronium_nanoswarm")
        .itemInputs("70x gtceu:magnetohydrodynamicallyconstrainedstarmatter_ingot", "gtlcore:command_block_core")
        .itemOutputs("kubejs:magnetohydrodynamicallyconstrainedstarmatter_leggings")
        .EUt(65536 * GTValues.VA[GTValues.MAX])
        .circuit(3)
        .duration(200)

    gtr.assembler("gtlcore:magnetohydrodynamicallyconstrainedstarmatter_boots")
        .notConsumable("gtceu:spacetime_nanoswarm")
        .notConsumable("gtceu:cosmicneutronium_nanoswarm")
        .itemInputs("40x gtceu:magnetohydrodynamicallyconstrainedstarmatter_ingot", "gtlcore:command_block_core")
        .itemOutputs("kubejs:magnetohydrodynamicallyconstrainedstarmatter_boots")
        .EUt(65536 * GTValues.VA[GTValues.MAX])
        .circuit(4)
        .duration(200)

    gtr.assembler("gtlcore:neutronium_gearbox")
        .itemInputs("4x gtceu:neutronium_plate", "2x gtceu:neutronium_gear", "gtceu:neutronium_frame")
        .itemOutputs("2x gtlcore:neutronium_gearbox")
        .EUt(16)
        .duration(50)
        .circuit(4)

    gtr.assembler("gtlcore:space_elevator_mechanical_casing")
        .itemInputs("gtceu:hssg_frame", "6x gtceu:inconel_792_plate", "6x gtceu:double_pikyonium_plate")
        .itemOutputs("2x gtlcore:space_elevator_mechanical_casing")
        .EUt(16)
        .duration(50)
        .circuit(6)

    gtr.assembler("gtlcore:extreme_strength_tritanium_casing")
        .itemInputs("gtceu:tritanium_frame", "6x gtceu:tritanium_plate")
        .itemOutputs("2x gtlcore:extreme_strength_tritanium_casing")
        .circuit(6)
        .EUt(16)
        .duration(50)

    gtr.assembler("gtlcore:aluminium_bronze_casing")
        .itemInputs("gtceu:aluminium_bronze_frame", "6x gtceu:aluminium_bronze_plate")
        .itemOutputs("2x gtlcore:aluminium_bronze_casing")
        .circuit(6)
        .EUt(16)
        .duration(50)

    gtr.assembler("gtlcore:hyper_mechanical_casing")
        .itemInputs("gtceu:naquadah_alloy_frame", "6x gtceu:naquadria_plate")
        .itemOutputs("2x gtlcore:hyper_mechanical_casing")
        .circuit(6)
        .EUt(16)
        .duration(50)

    gtr.assembler("gtlcore:enhance_hyper_mechanical_casing")
        .itemInputs("gtceu:naquadria_frame", "2x gtceu:double_naquadah_alloy_plate", "2x gtceu:double_naquadah_plate", "2x gtceu:double_enriched_naquadah_plate")
        .itemOutputs("2x gtlcore:enhance_hyper_mechanical_casing")
        .inputFluids("gtceu:naquadria 576")
        .circuit(6)
        .EUt(16)
        .duration(50)

    gtr.assembler("gtlcore:antifreeze_heatproof_machine_casing")
        .itemInputs("gtceu:inconel_792_frame", "2x gtceu:double_hsse_plate", "4x gtceu:double_rhodium_plated_palladium_plate")
        .itemOutputs("2x gtlcore:antifreeze_heatproof_machine_casing")
        .EUt(16)
        .duration(50)
        .circuit(6)

    gtr.assembler("gtlcore:pikyonium_machine_casing")
        .itemInputs("gtceu:hastelloy_x_frame", "6x gtceu:pikyonium_plate")
        .itemOutputs("2x gtlcore:pikyonium_machine_casing")
        .EUt(16)
        .duration(50)
        .circuit(6)

    gtr.assembler("gtlcore:oxidation_resistant_hastelloy_n_mechanical_casing")
        .itemInputs("gtceu:hastelloy_n_frame", "6x gtceu:hastelloy_n_plate")
        .itemOutputs("2x gtlcore:oxidation_resistant_hastelloy_n_mechanical_casing")
        .EUt(16)
        .duration(50)
        .circuit(6)

    gtr.assembler("gtlcore:atomic_casing")
        .itemInputs("gtceu:naquadah_alloy_frame", "2x gtceu:abyssalalloy_plate", "4x gtceu:enriched_naquadah_plate")
        .itemOutputs("2x gtceu:atomic_casing")
        .circuit(6)
        .EUt(16)
        .duration(50)

    gtr.assembler("gtlcore:lafium_mechanical_casing")
        .itemInputs("gtceu:enriched_naquadah_frame", "6x gtceu:lafium_plate")
        .itemOutputs("2x gtlcore:lafium_mechanical_casing")
        .circuit(6)
        .EUt(16)
        .duration(50)

    gtr.assembler("gtlcore:echo_casing")
        .itemInputs("gtceu:europium_frame", "gtlcore:reinforced_echo_shard", "6x gtceu:double_hsse_plate")
        .itemOutputs("2x gtlcore:echo_casing")
        .circuit(6)
        .EUt(30)
        .duration(200)

    gtr.assembler("gtlcore:naquadah_alloy_casing")
        .itemInputs("gtceu:naquadah_alloy_frame", "6x gtceu:naquadah_alloy_plate")
        .circuit(6)
        .itemOutputs("gtlcore:naquadah_alloy_casing")
        .EUt(16)
        .duration(50)

    gtr.assembler("gtlcore:supercritical_turbine_casing")
        .itemInputs("gtceu:tungstensteel_turbine_casing", "2x gtceu:mar_m_200_steel_rod", "gtceu:mar_m_200_steel_gear", "6x gtceu:mar_m_200_steel_plate")
        .itemOutputs("gtlcore:supercritical_turbine_casing")
        .circuit(6)
        .EUt(16)
        .duration(50)

    gtr.assembler("gtlcore:fission_reactor_casing")
        .itemInputs("gtceu:vanadium_steel_frame", "6x gtceu:lead_plate", "6x gtceu:reactor_steel_plate")
        .itemOutputs("2x gtlcore:fission_reactor_casing")
        .circuit(6)
        .EUt(16)
        .duration(50)

    gtr.assembler("gtlcore:cooler")
        .itemInputs("gtlcore:fission_reactor_casing", "2x gtceu:annealed_copper_hex_wire", "8x gtceu:vanadium_steel_tiny_fluid_pipe", "4x gtceu:stainless_steel_plate")
        .inputFluids("gtceu:soldering_alloy 288")
        .itemOutputs("gtlcore:cooler")
        .EUt(120)
        .duration(200)

    gtr.assembler("gtlcore:fission_fuel_assembly")
        .itemInputs("gtceu:graphite_block", "4x gtceu:long_stainless_steel_rod", "4x gtceu:double_reactor_steel_plate")
        .inputFluids("gtceu:soldering_alloy 288")
        .itemOutputs("gtlcore:fission_fuel_assembly")
        .EUt(120)
        .duration(200)

    gtr.assembler("gtlcore:manipulator")
        .itemInputs("2x gtceu:neutron_reflector", "4x #gtceu:circuits/uhv", "gtceu:uev_robot_arm", "32x gtceu:inconel_792_bolt", "16x gtceu:diamond_screw", "4x gtceu:double_iridium_plate", "8x gtceu:double_zeron_100_plate")
        .inputFluids("gtceu:mutated_living_solder 576")
        .itemOutputs("gtlcore:manipulator")
        .EUt(30720)
        .duration(400)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtlcore:stellar_containment_casing")
        .itemInputs("gtceu:trinium_frame", "16x gtceu:trinium_screw", "gtceu:uv_field_generator", "gtceu:yttrium_barium_cuprate_quadruple_wire", "4x gtceu:naquadah_alloy_rod", "4x gtceu:double_highurabilityompoundteel_plate")
        .inputFluids("gtceu:neutronium 144")
        .itemOutputs("gtlcore:stellar_containment_casing")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(140)

    gtr.assembler("gtlcore:naquadria_charge")
        .itemInputs("gtceu:black_steel_frame", "gtceu:dynamite", "4x gtceu:titanium_bolt", "gtceu:hmxexplosive_dust", "gtceu:naquadria_dust", "gtceu:uranium_plate", "gtceu:osmium_bolt", "gtceu:hexanitrohexaaxaisowurtzitane_dust", "gtceu:thorium_plate")
        .inputFluids("gtceu:glyceryl_trinitrate 500")
        .itemOutputs("gtlcore:naquadria_charge")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(100)

    gtr.assembler("gtlcore:dimensionally_transcendent_casing")
        .itemInputs("gtceu:mithril_frame", "2x gtlcore:dimension_injection_casing", "2x gtlcore:molecular_casing", "gtceu:iv_quantum_chest", "gtceu:iv_quantum_tank", "12x gtceu:adamantium_bolt", "gtceu:enderite_single_wire", "6x gtceu:palladium_plate", "6x gtceu:osmiridium_plate")
        .itemOutputs("2x gtlcore:dimensionally_transcendent_casing")
        .inputFluids("gtceu:liquid_degenerate_rhenium 200")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(200)

    gtr.assembler("gtlcore:dimension_connection_casing")
        .itemInputs("gtceu:draconium_frame", "gtlcore:dimensional_bridge_casing", "gtceu:periodicium_block", "8x gtceu:double_mithril_plate", "4x gtceu:cosmic_plate", "2x gtceu:double_shirabon_plate")
        .itemOutputs("gtlcore:dimension_connection_casing")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(400)

    gtr.assembler("gtlcore:uruium_coil_block")
        .itemInputs("64x gtceu:uruium_double_wire", "64x gtceu:uruium_double_wire", "16x gtceu:neutronium_ring", "32x gtceu:vibramantium_bolt", "64x gtceu:black_steel_foil", "64x gtceu:cupronickel_foil", "64x gtceu:ruthenium_trinium_americium_neutronate_foil", "64x gtceu:hssg_foil", "64x gtceu:styrene_butadiene_rubber_foil")
        .itemOutputs("gtlcore:uruium_coil_block")
        .inputFluids("gtceu:molybdenum 576")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(600)

    gtr.assembler("gtlcore:graviton_field_constraint_casing")
        .itemInputs("gtceu:draconium_frame", "gtlcore:annihilation_constrainer", "gtceu:neutronium_nanoswarm", "gtceu:celestialtungsten_gear", "4x gtceu:double_adamantium_plate")
        .inputFluids("gtceu:neutronium 288")
        .itemOutputs("2x gtlcore:graviton_field_constraint_casing")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(100)

    gtr.assembler("gtlcore:accelerated_pipeline")
        .itemInputs("gtceu:europium_quadruple_fluid_pipe", "2x gtceu:luv_voltage_coil", "#gtceu:circuits/luv", "gtceu:niobium_nitride_single_cable", "gtceu:copper76_dust", "gtceu:double_neodymium_plate")
        .itemOutputs("gtlcore:accelerated_pipeline")
        .inputFluids("gtceu:soldering_alloy 288")
        .duration(400)
        .EUt(GTValues.VA[GTValues.IV])
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtlcore:force_field_glass")
        .itemInputs("gtceu:laminated_glass", "gtceu:uhv_field_generator", "4x gtceu:long_naquadah_alloy_rod", "2x gtceu:long_mithril_rod", "4x gtceu:double_uranium_rhodium_dinaquadide_plate", "2x gtceu:double_naquadah_alloy_plate")
        .inputFluids("gtceu:mutated_living_solder 1296")
        .itemOutputs("gtlcore:force_field_glass")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(400)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtlcore:molecular_casing")
        .itemInputs("gtceu:high_power_casing", "4x gtceu:double_battery_alloy_plate", "gtceu:iv_emitter", "24x gtceu:darmstadtium_ring", "12x gtceu:tungsten_foil", "12x gtceu:ruridit_foil", "24x gtceu:tungsten_steel_foil", "6x gtceu:rhodium_plate", "4x gtceu:double_ruthenium_plate")
        .inputFluids("gtceu:niobium_nitride 864")
        .itemOutputs("gtlcore:molecular_casing")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(400)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtlcore:spacetime_assembly_line_casing")
        .itemInputs("gtceu:assembly_line_casing", "gtceu:uhv_emitter", "4x gtceu:uev_electric_motor", "2x gtceu:uev_conveyor_module", "2x gtceu:uev_electric_piston", "2x #gtceu:circuits/uev", "8x gtceu:double_zinc_plate")
        .inputFluids("gtceu:liquid_degenerate_rhenium 200")
        .itemOutputs("gtlcore:spacetime_assembly_line_casing")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(400)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtlcore:module_connector")
        .itemInputs("64x gtceu:hv_item_passthrough_hatch", "64x gtceu:hv_fluid_passthrough_hatch", "2x #gtceu:circuits/zpm", "4x gtceu:trinium_single_cable", "16x gtceu:double_manganese_plate", "64x gtceu:double_technetium_plate")
        .itemOutputs("gtlcore:module_connector")
        .inputFluids("gtceu:soldering_alloy 2880")
        .EUt(122880)
        .duration(400)

    gtr.assembler("gtlcore:module_base")
        .itemInputs("gtlcore:high_strength_concrete", "4x gtceu:technetium_plate", "4x gtceu:osmium_plate")
        .inputFluids("gtceu:soldering_alloy 288")
        .itemOutputs("gtlcore:module_base")
        .EUt(480)
        .duration(400)

    gtr.assembler("gtlcore:laser_cooling_casing")
        .itemInputs("gtceu:hsse_frame", "gtlcore:laser_cooling_unit", "2x gtlcore:uhv_voltage_coil", "6x gtceu:zirconium_carbide_plate", "2x gtceu:double_fluxed_electrum_plate", "4x gtceu:double_zeron_100_plate")
        .inputFluids("gtceu:soldering_alloy 576")
        .itemOutputs("gtlcore:laser_cooling_casing")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(200)

    gtr.assembler("gtlcore:space_elevator_support")
        .itemInputs("gtceu:naquadah_frame", "4x gtceu:red_steel_rod", "6x gtceu:black_steel_plate")
        .inputFluids("gtceu:concrete 1152")
        .itemOutputs("2x gtlcore:space_elevator_support")
        .EUt(480)
        .duration(400)

    gtr.assembler("gtlcore:space_elevator_internal_support")
        .itemInputs("gtceu:naquadah_frame", "2x gtceu:niobium_titanium_single_wire", "16x gtceu:fine_annealed_copper_wire", "#gtceu:circuits/luv", "6x gtceu:double_iridium_plate")
        .inputFluids("gtceu:concrete 1152")
        .itemOutputs("2x gtlcore:space_elevator_internal_support")
        .EUt(480)
        .duration(400)

    gtr.assembler("gtlcore:magic_core")
        .itemInputs("8x gtceu:double_stellite_100_plate", "gtlcore:bose_einstein_cooling_container", "minecraft:conduit", "8x gtceu:double_enderium_plate")
        .itemOutputs("kubejs:magic_core")
        .inputFluids("gtceu:mutated_living_solder 576")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(400)

    gtr.assembler("gtlcore:hyper_core")
        .itemInputs("16x gtceu:highurabilityompoundteel_screw", "4x gtceu:naquadria_frame", "4x gtceu:naquadria_plate", "2x gtceu:uev_field_generator", "gtceu:naquadah_nanoswarm", "gtceu:uev_sensor", "gtceu:uev_emitter", "#gtceu:circuits/uev")
        .inputFluids("gtceu:mutated_living_solder 288")
        .itemOutputs("gtlcore:hyper_core")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(400)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtlcore:annihilate_core")
        .itemInputs("gtceu:quantumchromodynamically_confined_matter_frame", "gtlcore:graviton_transducer", "gtlcore:topological_manipulator_unit", "gtceu:uxv_field_generator", "2x #gtceu:circuits/uxv", "4x gtceu:double_cinobite_plate")
        .inputFluids("gtceu:super_mutated_living_solder 1296")
        .itemOutputs("gtlcore:annihilate_core")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(400)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtlcore:degenerate_rhenium_constrained_casing")
        .circuit(6)
        .itemInputs("gtceu:quantanium_frame", "6x gtceu:degenerate_rhenium_plate")
        .itemOutputs("2x gtlcore:degenerate_rhenium_constrained_casing")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(1200)

    gtr.assembler("gtlcore:rhenium_reinforced_energy_glass")
        .itemInputs("4x gtceu:fusion_glass", "6x gtceu:degenerate_rhenium_plate")
        .itemOutputs("2x gtlcore:rhenium_reinforced_energy_glass")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(1200)

    gtr.assembler("gtlcore:dyson_deployment_magnet")
        .itemInputs("gtceu:uiv_energy_output_hatch", "4x gtceu:superconducting_coil", "8x gtlcore:pm_chip", "4x #gtceu:circuits/uiv", "6x gtceu:neutronium_plate")
        .itemOutputs("gtlcore:dyson_deployment_magnet")
        .inputFluids("gtceu:mutated_living_solder 1296")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(600)

    gtr.assembler("gtlcore:sps_casing")
        .itemInputs("gtceu:zylon_block", "gtlcore:restraint_device", "4x #gtceu:circuits/uev", "4x gtceu:small_quantanium_gear", "gtceu:neutronium_hex_cable", "32x gtceu:polyetheretherketone_foil")
        .inputFluids("gtceu:mutated_living_solder 576")
        .itemOutputs("gtlcore:sps_casing")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(800)

    gtr.assembler("gtlcore:neutron_sensor")
        .itemInputs("gtceu:iv_machine_hull", "gtceu:advanced_activity_detector_cover", "gtceu:computer_monitor_cover", "gtceu:vibrant_alloy_hex_wire", "#gtceu:circuits/ev", "2x gtceu:hv_sensor")
        .inputFluids("gtceu:helium 1000")
        .itemOutputs("gtlcore:neutron_sensor")
        .EUt(1920)
        .duration(200)

    gtr.assembler("gtlcore:neutron_activator")
        .itemInputs("gtceu:iv_machine_hull", "4x gtlcore:hui_circuit_1", "#gtceu:circuits/iv", "2x gtceu:data_stick", "gtceu:ev_sensor", "2x gtceu:ev_emitter", "gtceu:uranium_235_block", "gtceu:polonium_block", "2x gtceu:neutron_reflector")
        .inputFluids("gtceu:stainless_steel 1296")
        .itemOutputs("gtlcore:neutron_activator")
        .EUt(7680)
        .duration(200)

    gtr.assembler("gtlcore:speeding_pipe")
        .itemInputs("ad_astra:fluid_pipe_duct", "gtceu:stainless_steel_huge_fluid_pipe", "16x gtceu:blue_alloy_rod", "#gtceu:circuits/ev", "32x gtceu:mercury_barium_calcium_cuprate_single_wire", "32x gtceu:beryllium_plate")
        .itemOutputs("gtlcore:speeding_pipe")
        .inputFluids("gtceu:mar_m_200_steel 576")
        .EUt(1920)
        .duration(200)

    gtr.assembler("gtlcore:process_machine_casing")
        .itemInputs("gtceu:solid_machine_casing", "2x #gtceu:circuits/iv", "gtceu:end_steel_quadruple_wire", "2x gtceu:double_stainless_steel_plate", "4x gtceu:double_mar_m_200_steel_plate")
        .inputFluids("gtceu:fall_king 576")
        .itemOutputs("gtlcore:process_machine_casing")
        .EUt(7680)
        .duration(200)


    gtr.assembler("gtlcore:advanced_stellar_containment_casing")
        .itemInputs("gtlcore:stellar_containment_casing", "gtceu:uhv_field_generator", "8x gtceu:vibranium_screw", "gtceu:enderite_octal_wire", "4x gtceu:taranium_plate")
        .itemOutputs("gtlcore:advanced_stellar_containment_casing")
        .inputFluids("gtceu:astraltitanium 144")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(280)

    gtr.assembler("gtlcore:ultimate_stellar_containment_casing")
        .itemInputs("gtlcore:advanced_stellar_containment_casing", "gtceu:uev_field_generator", "8x gtceu:vibramantium_screw", "gtceu:legendarium_quadruple_wire", "8x gtceu:heavy_quark_degenerate_matter_plate")
        .itemOutputs("gtlcore:ultimate_stellar_containment_casing")
        .inputFluids("gtceu:celestialtungsten 144")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(460)

    gtr.assembler("gtlcore:component_assembly_line_casing_lv")
        .itemInputs("gtceu:steel_frame", "4x gtceu:dense_steel_plate", "4x gtceu:lv_robot_arm", "8x gtceu:lv_electric_piston", "10x gtceu:lv_electric_motor", "4x gtceu:steel_gear", "3x gtceu:manganese_phosphide_octal_wire", "16x #gtceu:circuits/lv")
        .inputFluids("gtceu:soldering_alloy 288")
        .itemOutputs("gtlcore:component_assembly_line_casing_lv")
        .EUt(GTValues.VA[GTValues.LV])
        .duration(320)

    gtr.assembler("gtlcore:component_assembly_line_casing_mv")
        .itemInputs("gtceu:aluminium_frame", "16x gtceu:double_aluminium_plate", "4x gtceu:mv_robot_arm", "8x gtceu:mv_electric_piston", "10x gtceu:mv_electric_motor", "4x gtceu:aluminium_gear", "3x gtceu:magnesium_diboride_octal_wire", "8x #gtceu:circuits/mv", "16x #gtceu:circuits/lv")
        .inputFluids("gtceu:soldering_alloy 432")
        .itemOutputs("gtlcore:component_assembly_line_casing_mv")
        .EUt(GTValues.VA[GTValues.MV])
        .duration(320)

    gtr.assembler("gtlcore:component_assembly_line_casing_hv")
        .itemInputs("gtceu:stainless_steel_frame", "16x gtceu:double_stainless_steel_plate", "4x gtceu:hv_robot_arm", "8x gtceu:hv_electric_piston", "10x gtceu:hv_electric_motor", "4x gtceu:stainless_steel_gear", "3x gtceu:mercury_barium_calcium_cuprate_octal_wire", "8x #gtceu:circuits/hv", "16x #gtceu:circuits/mv")
        .inputFluids("gtceu:soldering_alloy 576")
        .itemOutputs("gtlcore:component_assembly_line_casing_hv")
        .EUt(GTValues.VA[GTValues.HV])
        .duration(320)

    gtr.assembler("gtlcore:component_assembly_line_casing_ev")
        .itemInputs("gtceu:titanium_frame", "16x gtceu:double_titanium_plate", "4x gtceu:ev_robot_arm", "8x gtceu:ev_electric_piston", "10x gtceu:ev_electric_motor", "4x gtceu:titanium_gear", "3x gtceu:uranium_triplatinum_octal_wire", "8x #gtceu:circuits/ev", "16x #gtceu:circuits/hv")
        .inputFluids("gtceu:soldering_alloy 720")
        .itemOutputs("gtlcore:component_assembly_line_casing_ev")
        .EUt(GTValues.VA[GTValues.EV])
        .duration(320)

    gtr.assembler("gtlcore:component_assembly_line_casing_iv")
        .itemInputs("gtceu:tungsten_steel_frame", "16x gtceu:double_tungsten_steel_plate", "4x gtceu:iv_robot_arm", "8x gtceu:iv_electric_piston", "10x gtceu:iv_electric_motor", "4x gtceu:tungsten_steel_gear", "3x gtceu:samarium_iron_arsenic_oxide_octal_wire", "8x #gtceu:circuits/iv", "16x #gtceu:circuits/ev")
        .inputFluids("gtceu:soldering_alloy 864")
        .itemOutputs("gtlcore:component_assembly_line_casing_iv")
        .EUt(GTValues.VA[GTValues.IV])
        .duration(320)

    gtr.assembler("gtlcore:hsss_reinforced_borosilicate_glass")
        .itemInputs("4x gtceu:laminated_glass", "4x gtceu:double_hsss_plate", "32x gtceu:fine_borosilicate_glass_wire")
        .itemOutputs("2x gtlcore:hsss_reinforced_borosilicate_glass")
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(600)

    gtr.assembler("gtlcore:inconel_625_casing")
        .itemInputs("2x gtceu:ev_machine_hull", "4x gtceu:double_inconel_625_plate", "8x gtceu:double_hsse_plate", "16x gtceu:inconel_625_bolt")
        .inputFluids("gtceu:titanium 1152")
        .itemOutputs("2x gtlcore:inconel_625_casing")
        .EUt(GTValues.VA[GTValues.EV])
        .duration(480)

    gtr.assembler("gtlcore:inconel_625_pipe")
        .itemInputs("2x gtceu:hsss_frame", "4x gtceu:double_inconel_625_plate", "8x gtceu:double_hsse_plate", "16x gtceu:inconel_625_bolt")
        .inputFluids("gtceu:soldering_alloy 1152")
        .itemOutputs("2x gtlcore:inconel_625_pipe")
        .EUt(GTValues.VA[GTValues.EV])
        .duration(480)

    gtr.assembler("gtlcore:inconel_625_gearbox")
        .itemInputs("gtceu:hsse_frame", "3x gtceu:inconel_625_gear", "6x gtceu:small_hsss_gear", "16x gtceu:hssg_bolt", "2x gtceu:tungsten_grinding_head")
        .inputFluids("gtceu:zeron_100 576")
        .itemOutputs("2x gtlcore:inconel_625_gearbox")
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(600)

    gtr.assembler("gtlcore:hastelloy_n_75_casing")
        .itemInputs("2x gtceu:ev_machine_hull", "4x gtceu:double_nichrome_plate", "4x gtceu:double_watertight_steel_plate", "2x gtceu:long_hssg_rod", "16x gtceu:hastelloy_n_75_bolt")
        .inputFluids("gtceu:stainless_steel 1152")
        .itemOutputs("2x gtlcore:hastelloy_n_75_casing")
        .EUt(GTValues.VA[GTValues.IV])
        .duration(500)

    gtr.assembler("gtlcore:hastelloy_n_75_gearbox")
        .itemInputs("gtceu:hssg_frame", "4x gtceu:double_hssg_plate", "3x gtceu:hastelloy_n_75_gear", "6x gtceu:hastelloy_n_75_gear", "16x gtceu:tungsten_carbide_bolt")
        .inputFluids("gtceu:hastelloy_x 576")
        .itemOutputs("2x gtlcore:hastelloy_n_75_gearbox")
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(280)

    gtr.assembler("gtlcore:hastelloy_n_75_pipe")
        .itemInputs("gtceu:watertight_steel_frame", "6x gtceu:double_hastelloy_n_75_plate", "4x gtceu:tungsten_steel_small_fluid_pipe")
        .inputFluids("gtceu:soldering_alloy 1152")
        .itemOutputs("2x gtlcore:hastelloy_n_75_pipe")
        .EUt(GTValues.VA[GTValues.EV])
        .duration(480)

    gtr.assembler("gtlcore:red_steel_casing")
        .circuit(6)
        .itemInputs("gtceu:hsla_steel_frame", "2x gtceu:titanium_carbide_plate", "4x gtceu:double_red_steel_plate")
        .itemOutputs("2x gtlcore:red_steel_casing")
        .EUt(GTValues.VA[GTValues.HV])
        .duration(600)

    gtr.assembler("gtlcore:advanced_fusion_coil")
        .itemInputs("gtlcore:improved_superconductor_coil", "2x gtceu:luv_field_generator", "gtceu:iv_electric_pump", "4x gtceu:neutron_reflector", "gtlcore:hui_circuit_2", "4x #gtceu:circuits/luv", "gtceu:naquadah_normal_fluid_pipe", "4x gtceu:duranium_plate")
        .inputFluids("gtceu:yttrium_barium_cuprate 576")
        .itemOutputs("gtlcore:advanced_fusion_coil")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(100)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtlcore:fusion_coil_mk2")
        .itemInputs("gtlcore:compressed_fusion_coil_mk2_prototype", "2x gtceu:zpm_field_generator", "gtceu:luv_electric_pump", "4x gtceu:neutron_reflector", "gtlcore:hui_circuit_3", "4x #gtceu:circuits/zpm", "gtceu:naquadah_large_fluid_pipe", "4x gtceu:dubnium_plate")
        .inputFluids("gtceu:yttrium_barium_cuprate 576")
        .itemOutputs("gtlcore:fusion_coil_mk2")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(100)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtlcore:fusion_casing_mk4")
        .itemInputs("gtceu:uhv_machine_casing", "gtlcore:advanced_fusion_coil", "2x gtlcore:uhv_voltage_coil", "2x gtlcore:hui_circuit_4", "gtceu:uv_field_generator", "6x gtceu:orichalcum_plate")
        .inputFluids("gtceu:polybenzimidazole 1152")
        .itemOutputs("2x gtlcore:fusion_casing_mk4")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(100)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtlcore:fusion_casing_mk5")
        .itemInputs("gtceu:uev_machine_casing", "gtlcore:fusion_coil_mk2", "2x gtlcore:uev_voltage_coil", "2x gtlcore:hui_circuit_5", "gtceu:uhv_field_generator", "6x gtceu:seaborgium_plate")
        .inputFluids("gtceu:polybenzimidazole 2304")
        .itemOutputs("2x gtlcore:fusion_casing_mk5")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(100)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtlcore:nuke_bomb")
        .itemInputs("gtceu:industrial_tnt", "#gtceu:circuits/ev", "4x gtceu:uranium_235_nugget", "gtlcore:reactor_uranium_simple", "gtceu:reactor_steel_plate")
        .itemOutputs("gtlcore:nuke_bomb")
        .duration(200)
        .EUt(480)

    gtr.assembler("gtlcore:naquadria_charge_a")
        .itemInputs("gtceu:quantum_star", "gtlcore:nuke_bomb", "gtceu:naquadria_dust", "4x gtceu:tiny_hexanitrohexaaxaisowurtzitane_dust", "gtceu:double_thorium_plate")
        .inputFluids("gtceu:antimatter 1")
        .itemOutputs("64x gtlcore:naquadria_charge")
        .duration(200)
        .EUt(GTValues.VA[GTValues.OpV])

    gtr.assembler("gtlcore:leptonic_charge")
        .itemInputs("gtceu:gravi_star", "gtlcore:nuke_bomb", "gtceu:degenerate_rhenium_dust", "2x gtceu:small_hexanitrohexaaxaisowurtzitane_dust", "gtceu:double_enderium_plate")
        .inputFluids("gtceu:antimatter 10")
        .itemOutputs("64x gtlcore:leptonic_charge")
        .duration(200)
        .EUt(GTValues.VA[GTValues.MAX])

    gtr.assembler("gtlcore:quantum_chromodynamic_charge")
        .notConsumable("gtceu:eternity_nanoswarm")
        .itemInputs("gtlcore:unstable_star", "gtlcore:leptonic_charge", "gtlcore:quantumchromodynamic_protective_plating")
        .inputFluids("gtceu:antimatter 100")
        .itemOutputs("64x gtlcore:quantum_chromodynamic_charge")
        .duration(200)
        .EUt(4 * GTValues.VA[GTValues.MAX])

    gtr.assembler("gtlcore:conversion_simulate_card")
        .itemInputs("enderio:skeletal_contractor", "gtlcore:draconium_block_charged", "4x enderio:vibrant_gear", "8x #gtceu:circuits/uv", "4x gtceu:double_technetium_plate")
        .inputFluids("gtceu:indium 288")
        .itemOutputs("gtlcore:conversion_simulate_card")
        .duration(200)
        .EUt(GTValues.VA[GTValues.EV])

    gtr.assembler("gtlcore:protonated_fullerene_sieving_matrix")
        .itemInputs("50x gtceu:fluorocarborane_dust", "6x gtceu:fine_carbon_nanotubes_wire", "1x gtceu:fullerene_dust")
        .inputFluids("gtceu:perfluorobenzene 2000")
        .itemOutputs("1x gtlcore:protonated_fullerene_sieving_matrix")
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(350)

    gtr.assembler("gtlcore:highly_dense_polymer_plate")
        .itemInputs("gtceu:carbon_nanotubes_plate", "gtceu:double_cosmicneutronium_plate", "gtceu:fullerene_polymer_matrix_pulp_plate")
        .inputFluids("gtceu:neutronium_doped_nanotubes 2000")
        .itemOutputs("gtlcore:highly_dense_polymer_plate")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(350)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtlcore:low_frequency_laser")
        .itemInputs("gtceu:red_garnet_rod", "gtlcore:red_halide_lamp", "gtlcore:highly_reflective_mirror", "kubejs:non_linear_optical_lens", "gtlcore:smd_diode_optical")
        .itemOutputs("gtlcore:low_frequency_laser")
        .inputFluids("gtceu:soldering_alloy 576")
        .EUt(491520)
        .duration(320)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtlcore:electron_source")
        .itemInputs("gtceu:mendelevium_plate", "gtceu:radium_dust", "6x gtceu:polyetheretherketone_plate", "4x gtceu:polybenzimidazole_plate", "4x gtceu:steel_plate")
        .inputFluids("gtceu:soldering_alloy 144")
        .itemOutputs("gtlcore:electron_source")
        .EUt(750000)
        .duration(200)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtlcore:rotating_transparent_surface")
        .itemInputs("4x gtceu:graphene_plate", "gtceu:uhv_electric_motor")
        .inputFluids("gtceu:soldering_alloy 144")
        .itemOutputs("gtlcore:rotating_transparent_surface")
        .EUt(1250000)
        .duration(200)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtlcore:microfocus_x_ray_tube")
        .itemInputs("4x gtceu:fine_enderium_wire", "gtceu:echoite_rod", "gtceu:glass_tube", "gtceu:double_palladium_plate")
        .itemOutputs("gtlcore:microfocus_x_ray_tube")
        .EUt(8000)
        .duration(160)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtlcore:grating_lithography_mask")
        .itemInputs("gtlcore:lithography_mask", "gtceu:glass_lens")
        .itemOutputs("gtlcore:grating_lithography_mask")
        .EUt(1920)
        .duration(200)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtlcore:ultrashort_pulse_laser")
        .itemInputs("4x gtlcore:diffractor_grating_mirror", "8x gtceu:fine_borosilicate_glass_wire", "gtlcore:high_frequency_laser", "2x gtlcore:insulation_wire_assembly", "gtceu:yellow_garnet_rod", "gtceu:lapis_rod", "gtceu:exquisite_olivine_gem", "gtceu:ev_emitter", "gtceu:double_platinum_plate")
        .inputFluids("gtceu:soldering_alloy 288")
        .itemOutputs("gtlcore:ultrashort_pulse_laser")
        .EUt(45000000)
        .duration(270)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtlcore:insulation_wire_assembly")
        .itemInputs("gtceu:reinforced_epoxy_resin_rod", "gtlcore:aerographene", "gtlcore:highly_insulating_foil", "gtlcore:memory_foam_block", "gtceu:fullerene_polymer_matrix_pulp_foil")
        .inputFluids("gtceu:polyimide 144")
        .itemOutputs("gtlcore:insulation_wire_assembly")
        .EUt(480)
        .duration(200)
        .cleanroom(GTLCleanroomType.LAW_CLEANROOM)

    gtr.assembler("gtlcore:graviton_transducer")
        .itemInputs("2x gtlcore:quantumchromodynamic_protective_plating", "gtlcore:contained_reissner_nordstrom_singularity", "gtlcore:microwormhole_generator", "gtlcore:dark_matter", "gtceu:uiv_sensor")
        .inputFluids("gtceu:neutronium 144")
        .itemOutputs("gtlcore:graviton_transducer")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(600)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtlcore:cryogenic_interface")
        .itemInputs("gtceu:double_graphene_plate", "8x gtceu:graphene_foil", "gtceu:fine_trinium_titanium_wire", "8x gtceu:mendelevium_foil", "2x gtceu:zirconium_carbide_plate")
        .inputFluids("gtceu:zylon 72")
        .itemOutputs("gtlcore:cryogenic_interface")
        .EUt(8000)
        .duration(160)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtlcore:medium_frequency_laser")
        .itemInputs("gtceu:lazurite_rod", "gtlcore:green_halide_lamp", "gtlcore:highly_reflective_mirror", "kubejs:non_linear_optical_lens", "gtlcore:smd_diode_optical")
        .itemOutputs("gtlcore:medium_frequency_laser")
        .inputFluids("gtceu:soldering_alloy 576")
        .EUt(491520)
        .duration(320)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtlcore:high_frequency_laser")
        .itemInputs("gtceu:amethyst_rod", "gtlcore:blue_halide_lamp", "gtlcore:highly_reflective_mirror", "kubejs:non_linear_optical_lens", "gtlcore:smd_diode_optical")
        .itemOutputs("gtlcore:high_frequency_laser")
        .inputFluids("gtceu:soldering_alloy 576")
        .EUt(491520)
        .duration(320)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtlcore:ballast")
        .itemInputs("2x gtceu:fine_annealed_copper_wire", "gtceu:resistor", "gtceu:inductor", "gtceu:double_annealed_copper_plate")
        .itemOutputs("gtlcore:ballast")
        .inputFluids("gtceu:soldering_alloy 144")
        .EUt(1920)
        .duration(290)

    gtr.assembler("gtlcore:laser_diode")
        .itemInputs("2x gtceu:fine_gold_wire", "gtlcore:smd_diode_bioware", "gtceu:amethyst_lens", "gtceu:double_nichrome_plate")
        .itemOutputs("gtlcore:laser_diode")
        .inputFluids("gtceu:soldering_alloy 288")
        .EUt(980000)
        .duration(260)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtlcore:laser_cooling_unit")
        .itemInputs("4x gtceu:fine_gold_wire", "gtceu:frostproof_machine_casing", "gtlcore:laser_diode", "#gtceu:circuits/hv")
        .itemOutputs("gtlcore:laser_cooling_unit")
        .inputFluids("gtceu:soldering_alloy 288")
        .EUt(1200000)
        .duration(300)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtlcore:empty_laser_cooling_container")
        .itemInputs("8x gtceu:steel_plate", "gtlcore:laser_cooling_unit", "gtlcore:magnetic_trap", "2x gtceu:double_magnalium_plate")
        .itemOutputs("gtlcore:empty_laser_cooling_container")
        .inputFluids("gtceu:soldering_alloy 144")
        .EUt(1150000)
        .duration(380)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtlcore:magnetic_trap")
        .itemInputs("2x gtceu:enriched_naquadah_trinium_europium_duranide_double_wire", "gtceu:frostproof_machine_casing", "gtceu:double_kanthal_plate")
        .itemOutputs("gtlcore:magnetic_trap")
        .inputFluids("gtceu:soldering_alloy 432")
        .EUt(1000000)
        .duration(480)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtlcore:red_halide_lamp")
        .itemInputs("2x gtceu:electrum_foil", "gtceu:potassium_bromide_dust", "4x gtceu:strontium_europium_aluminate_dust", "2x gtceu:cubic_zirconia_plate", "4x gtceu:maraging_steel_300_rod", "2x gtceu:borosilicate_glass_ingot", "gtlcore:ballast", "gtceu:glass_tube", "2x gtceu:molybdenum_foil")
        .itemOutputs("gtlcore:red_halide_lamp")
        .inputFluids("gtceu:nitrogen 1000")
        .EUt(7680)
        .duration(110)

    gtr.assembler("gtlcore:green_halide_lamp")
        .itemInputs("2x gtceu:electrum_foil", "gtceu:iridium_chloride_dust", "4x gtceu:strontium_europium_aluminate_dust", "2x gtceu:cubic_zirconia_plate", "4x gtceu:maraging_steel_300_rod", "2x gtceu:borosilicate_glass_ingot", "gtlcore:ballast", "gtceu:glass_tube", "2x gtceu:molybdenum_foil")
        .itemOutputs("gtlcore:green_halide_lamp")
        .inputFluids("gtceu:nitrogen 1000")
        .EUt(7680)
        .duration(110)

    gtr.assembler("gtlcore:blue_halide_lamp")
        .itemInputs("2x gtceu:electrum_foil", "gtceu:titanium_trifluoride_dust", "4x gtceu:strontium_europium_aluminate_dust", "2x gtceu:cubic_zirconia_plate", "4x gtceu:maraging_steel_300_rod", "2x gtceu:borosilicate_glass_ingot", "gtlcore:ballast", "gtceu:glass_tube", "2x gtceu:molybdenum_foil")
        .itemOutputs("gtlcore:blue_halide_lamp")
        .inputFluids("gtceu:nitrogen 1000")
        .EUt(7680)
        .duration(110)

    gtr.assembler("gtlcore:separation_electromagnet")
        .itemInputs("64x gtceu:fine_yttrium_barium_cuprate_wire", "64x gtceu:fine_niobium_titanium_wire", "16x gtceu:polybenzimidazole_foil", "8x gtceu:niobium_nitride_plate", "gtceu:long_vanadium_gallium_rod")
        .itemOutputs("gtlcore:separation_electromagnet")
        .inputFluids("gtceu:soldering_alloy 288")
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(600)

    gtr.assembler("gtlcore:two_way_foil")
        .itemInputs("gtceu:chaos_foil", "gtlcore:hyper_stable_self_healing_adhesive", "gtlcore:cosmic_fabric")
        .itemOutputs("gtlcore:two_way_foil")
        .EUt(4 * GTValues.VA[GTValues.MAX])
        .duration(200)

    gtr.assembler("gtlcore:solar_light_splitter")
        .itemInputs("gtceu:laminated_glass", "gtceu:ruby_lens", "gtceu:emerald_lens", "gtceu:sapphire_lens")
        .inputFluids("gtceu:glowstone 576")
        .itemOutputs("gtlcore:solar_light_splitter")
        .EUt(480)
        .duration(200)

    gtr.assembler("gtlcore:woven_kevlar")
        .itemInputs("8x gtlcore:kevlar_fiber")
        .itemOutputs("gtlcore:woven_kevlar")
        .circuit(8)
        .EUt(120)
        .duration(200)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtlcore:ingot_field_shape")
        .itemInputs("2x gtceu:polyphenylene_sulfide_plate", "2x gtceu:polybenzimidazole_plate", "gtceu:uv_field_generator", "gtceu:ingot_casting_mold")
        .itemOutputs("kubejs:ingot_field_shape")
        .inputFluids("gtceu:redstone_alloy 2304")
        .EUt(30720)
        .duration(200)

    gtr.assembler("gtlcore:ball_field_shape")
        .itemInputs("2x gtceu:polyphenylene_sulfide_plate", "2x gtceu:polybenzimidazole_plate", "gtceu:uv_field_generator", "gtceu:ball_casting_mold")
        .itemOutputs("kubejs:ball_field_shape")
        .inputFluids("gtceu:redstone_alloy 2304")
        .EUt(30720)
        .duration(200)

    gtr.assembler("gtlcore:plasma_containment_cell")
        .itemInputs("4x gtceu:osmiridium_plate", "gtceu:uv_field_generator", "gtceu:long_naquadah_alloy_rod", "2x gtceu:fusion_glass", "8x gtceu:fluxed_electrum_foil")
        .itemOutputs("gtlcore:plasma_containment_cell")
        .inputFluids("gtceu:mutated_living_solder 576")
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(400)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtlcore:wyvern_energy_core")
        .itemInputs("16x gtlcore:wyvern_core", "64x gtlcore:draconium_block_charged", "64x gtceu:iv_lapotronic_battery", "64x gtceu:luv_lapotronic_battery", "64x gtceu:double_draconium_plate")
        .inputFluids("gtceu:mutated_living_solder 5760")
        .itemOutputs("gtlcore:wyvern_energy_core")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(2400)

    gtr.assembler("gtlcore:luv_solar_panel")
        .itemInputs("4x gtlcore:pm_wafer", "16x gtceu:solar_panel", "16x gtceu:ulv_solar_panel", "16x gtceu:lv_solar_panel", "2x gtceu:cosmicneutronium_quadruple_wire", "4x gtceu:fusion_glass", "4x gtceu:double_hastelloyk_243_plate")
        .itemOutputs("gtceu:luv_solar_panel")
        .inputFluids("gtceu:mutated_living_solder 576")
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(1200)

    gtr.assembler("gtlcore:zpm_solar_panel")
        .itemInputs("4x gtlcore:fm_wafer", "16x gtceu:mv_solar_panel", "16x gtceu:hv_solar_panel", "16x gtceu:ev_solar_panel", "2x gtceu:cosmicneutronium_hex_wire", "16x gtceu:fusion_glass", "16x gtceu:double_vibranium_plate")
        .itemOutputs("gtceu:zpm_solar_panel")
        .inputFluids("gtceu:mutated_living_solder 1296")
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(1200)

    gtr.assembler("gtlcore:uv_solar_panel")
        .itemInputs("16x gtlcore:fm_wafer", "16x gtceu:iv_solar_panel", "16x gtceu:luv_solar_panel", "16x gtceu:zpm_solar_panel", "2x gtceu:infinity_hex_wire", "64x gtceu:fusion_glass", "64x gtceu:double_neutronium_plate")
        .itemOutputs("gtceu:uv_solar_panel")
        .inputFluids("gtceu:super_mutated_living_solder 576")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(1200)

    gtr.assembler("gtlcore:smd_transistor_bioware")
        .itemInputs("8x gtceu:fine_naquadah_alloy_wire", "2x gtceu:germaniumtungstennitride_plate", "2x gtceu:silicon_carbide_plate")
        .inputFluids("gtceu:polyimide 288")
        .itemOutputs("16x gtlcore:smd_transistor_bioware")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(100)
        .cleanroom(CleanroomType.STERILE_CLEANROOM)

    gtr.assembler("gtlcore:smd_capacitor_bioware")
        .itemInputs("8x gtceu:fine_naquadah_alloy_wire", "8x gtceu:silicon_foil", "4x gtceu:naquadah_foil")
        .inputFluids("gtceu:polyimide 288")
        .itemOutputs("16x gtlcore:smd_capacitor_bioware")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(100)
        .cleanroom(CleanroomType.STERILE_CLEANROOM)

    gtr.assembler("gtlcore:smd_resistor_bioware")
        .itemInputs("8x gtceu:fine_naquadah_alloy_wire", "gtceu:naquadria_plate", "gtceu:tritanium_plate")
        .inputFluids("gtceu:polyimide 288")
        .itemOutputs("16x gtlcore:smd_resistor_bioware")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(100)
        .cleanroom(CleanroomType.STERILE_CLEANROOM)

    gtr.assembler("gtlcore:smd_diode_bioware")
        .itemInputs("8x gtceu:fine_naquadah_alloy_wire", "gtceu:lutetium_dust", "gtceu:tritanium_dust")
        .inputFluids("gtceu:polyimide 288")
        .itemOutputs("16x gtlcore:smd_diode_bioware")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(100)
        .cleanroom(CleanroomType.STERILE_CLEANROOM)

    gtr.assembler("gtlcore:smd_inductor_bioware")
        .itemInputs("8x gtceu:fine_naquadah_alloy_wire", "gtceu:naquadah_alloy_ring")
        .inputFluids("gtceu:polyimide 288")
        .itemOutputs("16x gtlcore:smd_inductor_bioware")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(100)
        .cleanroom(CleanroomType.STERILE_CLEANROOM)

    gtr.assembler("gtlcore:smd_transistor_optical")
        .itemInputs("8x gtceu:fine_dubnium_wire", "4x gtceu:polyetheretherketone_foil", "2x gtceu:nether_star_plate", "2x gtceu:molybdenum_disilicide_plate")
        .inputFluids("gtceu:polyimide 576")
        .itemOutputs("16x gtlcore:smd_transistor_optical")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(100)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtlcore:smd_capacitor_optical")
        .itemInputs("8x gtceu:fine_dubnium_wire", "4x gtceu:polyetheretherketone_foil", "2x gtceu:tritanium_foil")
        .inputFluids("gtceu:polyimide 576")
        .itemOutputs("16x gtlcore:smd_capacitor_optical")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(100)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtlcore:smd_resistor_optical")
        .itemInputs("8x gtceu:fine_dubnium_wire", "4x gtceu:polyetheretherketone_foil", "3x gtceu:sodium_seaborgate_dust", "2x gtceu:ender_eye_plate")
        .inputFluids("gtceu:polyimide 576")
        .itemOutputs("16x gtlcore:smd_resistor_optical")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(100)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtlcore:smd_diode_optical")
        .itemInputs("8x gtceu:fine_dubnium_wire", "4x gtceu:polyetheretherketone_foil", "2x gtceu:vanadium_gallium_plate", "2x gtceu:beryllium_plate")
        .inputFluids("gtceu:polyimide 576")
        .itemOutputs("16x gtlcore:smd_diode_optical")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(100)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtlcore:smd_inductor_optical")
        .itemInputs("8x gtceu:fine_dubnium_wire", "gtceu:quantanium_ring")
        .inputFluids("gtceu:polyimide 576")
        .itemOutputs("16x gtlcore:smd_inductor_optical")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(100)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtlcore:smd_transistor_exotic")
        .itemInputs("gtceu:degenerate_rhenium_plate", "gtceu:dubnium_plate", "2x gtceu:duranium_foil")
        .inputFluids("gtceu:fullerene_polymer_matrix_pulp 72")
        .itemOutputs("16x gtlcore:smd_transistor_exotic")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(100)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtlcore:smd_capacitor_exotic")
        .itemInputs("gtceu:glowstone_plate", "gtceu:quantum_plate", "2x gtceu:cinobite_foil", "2x gtceu:carbon_nanotubes_foil")
        .inputFluids("gtceu:fullerene_polymer_matrix_pulp 72")
        .itemOutputs("16x gtlcore:smd_capacitor_exotic")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(100)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtlcore:smd_resistor_exotic")
        .itemInputs("4x gtceu:fine_cinobite_wire", "gtceu:quantum_dust", "2x gtceu:indium_tin_barium_titanium_cuprate_foil", "2x gtceu:enderite_foil")
        .inputFluids("gtceu:fullerene_polymer_matrix_pulp 72")
        .itemOutputs("16x gtlcore:smd_resistor_exotic")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(100)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtlcore:smd_diode_exotic")
        .itemInputs("gtceu:enderite_plate", "gtceu:trinium_titanium_plate", "2x gtceu:dubnium_foil", "2x gtceu:quantum_foil")
        .inputFluids("gtceu:fullerene_polymer_matrix_pulp 72")
        .itemOutputs("16x gtlcore:smd_diode_exotic")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(100)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtlcore:smd_inductor_exotic")
        .itemInputs("8x gtceu:fine_cinobite_wire", "gtceu:adamantium_ring")
        .inputFluids("gtceu:fullerene_polymer_matrix_pulp 72")
        .itemOutputs("16x gtlcore:smd_inductor_exotic")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(100)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtlcore:smd_transistor_cosmic")
        .itemInputs("8x gtceu:fine_hastelloyx_78_wire", "4x gtceu:degenerate_rhenium_plate", "gtceu:hassium_plate", "2x gtceu:polytetrafluoroethylene_foil")
        .inputFluids("gtceu:fullerene_polymer_matrix_pulp 144")
        .itemOutputs("16x gtlcore:smd_transistor_cosmic")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(100)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtlcore:smd_capacitor_cosmic")
        .itemInputs("8x gtceu:fine_hastelloyx_78_wire", "4x gtceu:graphene_plate", "4x gtceu:taranium_foil", "2x gtceu:polycaprolactam_foil")
        .inputFluids("gtceu:fullerene_polymer_matrix_pulp 144")
        .itemOutputs("16x gtlcore:smd_capacitor_cosmic")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(100)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtlcore:smd_resistor_cosmic")
        .itemInputs("8x gtceu:fine_hastelloyx_78_wire", "4x gtceu:black_titanium_plate", "2x gtceu:superheavy_l_alloy_plate", "2x gtceu:naquadah_alloy_foil")
        .inputFluids("gtceu:fullerene_polymer_matrix_pulp 144")
        .itemOutputs("16x gtlcore:smd_resistor_cosmic")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(100)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtlcore:smd_diode_cosmic")
        .itemInputs("8x gtceu:fine_hastelloyx_78_wire", "4x gtceu:abyssalalloy_plate", "2x gtceu:superheavy_h_alloy_plate", "2x gtceu:niobium_nitride_foil")
        .inputFluids("gtceu:fullerene_polymer_matrix_pulp 144")
        .itemOutputs("16x gtlcore:smd_diode_cosmic")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(100)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtlcore:smd_inductor_cosmic")
        .itemInputs("8x gtceu:fine_hastelloyx_78_wire", "gtceu:vibranium_ring")
        .inputFluids("gtceu:fullerene_polymer_matrix_pulp 144")
        .itemOutputs("16x gtlcore:smd_inductor_cosmic")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(100)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtlcore:smd_capacitor_supracausal")
        .notConsumable("gtlcore:microwormhole_generator")
        .itemInputs("gtceu:adamantine_plate")
        .itemOutputs("32x gtlcore:smd_capacitor_supracausal")
        .inputFluids("gtceu:radox 144")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(400)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtlcore:smd_diode_supracausal")
        .notConsumable("gtlcore:microwormhole_generator")
        .itemInputs("gtceu:vibramantium_plate")
        .itemOutputs("32x gtlcore:smd_diode_supracausal")
        .inputFluids("gtceu:radox 144")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(400)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtlcore:smd_transistor_supracausal")
        .notConsumable("gtlcore:microwormhole_generator")
        .itemInputs("gtceu:neutronium_plate")
        .itemOutputs("32x gtlcore:smd_transistor_supracausal")
        .inputFluids("gtceu:radox 144")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(400)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtlcore:smd_resistor_supracausal")
        .notConsumable("gtlcore:microwormhole_generator")
        .itemInputs("gtceu:fullerene_polymer_matrix_pulp_foil")
        .itemOutputs("32x gtlcore:smd_resistor_supracausal")
        .inputFluids("gtceu:radox 144")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(400)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtlcore:smd_inductor_supracausal")
        .notConsumable("gtlcore:microwormhole_generator")
        .itemInputs("gtceu:draconium_ring")
        .itemOutputs("32x gtlcore:smd_inductor_supracausal")
        .inputFluids("gtceu:radox 144")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(400)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtlcore:fishing_ground")
        .itemInputs("gtceu:lv_fisher",
            "gtceu:mv_fisher",
            "gtceu:hv_fisher",
            "gtceu:lv_sensor",
            "gtceu:mv_sensor",
            "gtceu:hv_sensor",
            "2x #gtceu:circuits/ev",
            "4x gtceu:eglin_steel_plate",
            "4x gtceu:double_aluminium_bronze_plate")
        .inputFluids("gtceu:soldering_alloy 576")
        .itemOutputs("gtlcore:fishing_ground")
        .EUt(480)
        .duration(400)

    gtr.assembler("gtlcore:large_recycler")
        .itemInputs("4x gtceu:double_vanadium_steel_plate",
            "4x gtceu:black_bronze_gear",
            "8x gtceu:eglin_steel_rod",
            "4x gtceu:hv_electric_motor",
            "4x gtceu:hv_emitter",
            "4x #gtceu:circuits/ev",
            "4x gtceu:double_eglin_steel_plate",
            "8x gtceu:double_brass_plate",
            "8x gtceu:double_tin_plate")
        .inputFluids("gtceu:soldering_alloy 864")
        .itemOutputs("gtlcore:large_recycler")
        .EUt(1920)
        .duration(400)

    gtr.assembler("gtlcore:void_miner")
        .itemInputs("gtceu:lv_miner",
            "gtceu:mv_miner",
            "gtceu:hv_miner",
            "4x gtceu:lv_field_generator",
            "4x gtceu:mv_field_generator",
            "4x gtceu:hv_field_generator",
            "4x #gtceu:circuits/ev",
            "gtceu:long_titanium_rod",
            "4x gtceu:titanium_plate")
        .inputFluids("gtceu:soldering_alloy 1440")
        .itemOutputs("gtlcore:void_miner")
        .EUt(GTValues.VA[GTValues.HV])
        .duration(800)

    gtr.assembler("gtlcore:rare_earth_centrifugal")
        .itemInputs("8x gtceu:europium_plate", "16x gtceu:uhv_electric_motor", "16x gtceu:hsss_gear", "8x gtceu:long_mithril_rod", "16x gtceu:hsse_plate", "64x gtceu:fine_naquadria_wire", "4x #gtceu:circuits/uhv", "32x gtceu:stellite_plate")
        .itemOutputs("gtlcore:rare_earth_centrifugal")
        .inputFluids("gtceu:soldering_alloy 1296")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(1000)

    gtr.assembler("gtlcore:large_gas_collector")
        .itemInputs("gtceu:mv_gas_collector", "gtceu:hv_gas_collector", "gtceu:ev_gas_collector", "2x gtceu:mv_field_generator", "2x gtceu:hv_field_generator", "2x gtceu:ev_field_generator", "2x #gtceu:circuits/luv", "gtceu:iridium_huge_fluid_pipe", "4x gtceu:double_sterling_silver_plate")
        .itemOutputs("gtlcore:large_gas_collector")
        .inputFluids("gtceu:soldering_alloy 1296")
        .EUt(1920)
        .duration(400)

    gtr.assembler("gtlcore:large_incubator")
        .itemInputs("gtlcore:incubator", "4x gtceu:luv_field_generator", "4x gtceu:luv_sensor", "4x gtceu:luv_fluid_regulator", "4x gtceu:indium_tin_barium_titanium_cuprate_octal_wire", "16x gtceu:laminated_glass")
        .itemOutputs("gtlcore:large_incubator")
        .inputFluids("gtceu:polytetrafluoroethylene 1440")
        .EUt(122880)
        .duration(800)

    gtr.assembler("gtlcore:integrated_ore_processor")
        .itemInputs("gtceu:large_maceration_tower",
            "gtceu:large_centrifuge",
            "gtceu:large_sifting_funnel",
            "gtceu:large_chemical_bath",
            "8x gtceu:zpm_robot_arm",
            "8x gtceu:zpm_electric_pump",
            "8x gtceu:zpm_conveyor_module",
            "4x #gtceu:circuits/uhv",
            "16x gtceu:double_hsss_plate")
        .inputFluids("gtceu:duranium 2880")
        .itemOutputs("gtlcore:integrated_ore_processor")
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(1000)

    gtr.assembler("gtlcore:electric_implosion_compressor")
        .itemInputs("4x gtceu:implosion_compressor", "4x gtceu:luv_transformer_16a", "4x gtceu:luv_diode", "8x gtceu:luv_field_generator", "16x gtceu:tritanium_hex_cable", "4x gtceu:dense_obsidian_plate", "4x gtceu:dense_tungsten_steel_plate")
        .inputFluids("gtceu:soldering_alloy 1296")
        .itemOutputs("gtlcore:electric_implosion_compressor")
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(600)

    gtr.assembler("gtlcore:steam_mega_turbine")
        .itemInputs("8x gtceu:steam_large_turbine", "16x #gtceu:circuits/iv", "4x gtceu:ev_electric_pump", "8x gtceu:ev_electric_piston", "8x gtceu:black_bronze_turbine_blade", "8x gtceu:double_molybdenum_plate", "32x gtceu:double_steel_plate")
        .itemOutputs("gtlcore:steam_mega_turbine")
        .EUt(GTValues.VA[GTValues.EV])
        .duration(1200)

    gtr.assembler("gtlcore:gas_mega_turbine")
        .itemInputs("8x gtceu:gas_large_turbine", "16x #gtceu:circuits/luv", "8x gtceu:ev_electric_pump", "32x gtceu:ev_electric_piston", "8x gtceu:neodymium_turbine_blade", "8x gtceu:double_sterling_silver_plate", "32x gtceu:double_stainless_steel_plate")
        .itemOutputs("gtlcore:gas_mega_turbine")
        .EUt(GTValues.VA[GTValues.IV])
        .duration(1200)

    gtr.assembler("gtlcore:rocket_mega_turbine")
        .itemInputs("8x gtlcore:rocket_large_turbine", "16x #gtceu:circuits/zpm", "4x gtceu:iv_electric_motor", "8x gtceu:iv_electric_piston", "8x gtceu:tungsten_turbine_blade", "8x gtceu:double_vanadium_steel_plate", "32x gtceu:double_titanium_plate")
        .itemOutputs("gtlcore:rocket_mega_turbine")
        .EUt(GTValues.VA[GTValues.IV])
        .duration(1200)

    gtr.assembler("gtlcore:plasma_mega_turbine")
        .itemInputs("8x gtceu:plasma_large_turbine", "16x #gtceu:circuits/uv", "8x gtceu:iv_electric_pump", "16x gtceu:iv_electric_piston", "8x gtceu:osmiridium_turbine_blade", "8x gtceu:double_ultimet_plate", "32x gtceu:double_tungsten_steel_plate")
        .itemOutputs("gtlcore:plasma_mega_turbine")
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(1200)

    gtr.assembler("gtlcore:chemical_energy_devourer")
        .itemInputs("4x gtceu:extreme_combustion_engine", "4x gtceu:iv_field_generator", "8x gtceu:iv_emitter", "8x gtceu:iv_electric_pump", "16x gtceu:ev_fluid_regulator", "8x gtceu:small_tungsten_spring", "8x gtceu:small_vanadium_gallium_spring", "8x gtceu:luv_transformer_4a", "4x gtceu:dense_tungsten_steel_plate")
        .inputFluids("gtceu:lubricant 10000")
        .itemOutputs("gtlcore:chemical_energy_devourer")
        .EUt(GTValues.VA[GTValues.IV])
        .duration(1200)

    gtr.assembler("gtlcore:petrochemical_plant")
        .itemInputs("16x gtceu:watertight_steel_frame", "8x gtceu:large_distillery", "4x gtlcore:large_cracker", "gtlcore:chemical_plant", "4x #gtceu:circuits/uhv", "4x gtceu:zpm_emitter", "16x gtceu:zpm_fluid_regulator", "16x gtceu:stainless_steel_nonuple_fluid_pipe", "32x gtceu:double_stainless_steel_plate")
        .itemOutputs("gtlcore:petrochemical_plant")
        .inputFluids("gtceu:soldering_alloy 1296")
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(1000)

    gtr.assembler("gtlcore:slaughterhouse")
        .itemInputs("gtceu:steel_frame", "gtceu:lv_world_accelerator", "4x #gtceu:circuits/lv", "2x gtceu:pulsating_alloy_hex_wire", "8x gtceu:lv_electric_motor", "4x gtceu:lv_robot_arm", "8x gtceu:invar_gear", "2x gtceu:diamond_grinding_head", "4x gtceu:double_steel_plate")
        .itemOutputs("gtlcore:slaughterhouse")
        .EUt(30)
        .duration(400)

    gtr.assembler("gtlcore:chemical_distort")
        .itemInputs("gtlcore:chemical_plant", "16x gtceu:carbon_nanoswarm", "8x gtceu:uv_electric_pump", "8x gtceu:uv_emitter", "8x #gtceu:circuits/uv", "8x gtceu:naquadria_plate")
        .inputFluids("gtceu:soldering_alloy 1296")
        .itemOutputs("gtlcore:chemical_distort")
        .EUt(524288)
        .duration(400)

    gtr.assembler("gtlcore:disassembly")
        .itemInputs("gtceu:assembly_line", "4x gtceu:naquadah_alloy_gear", "16x gtceu:luv_robot_arm", "8x gtceu:luv_conveyor_module", "8x gtceu:luv_emitter", "4x gtceu:double_naquadah_alloy_plate")
        .inputFluids("gtceu:naquadah 1440")
        .itemOutputs("gtlcore:disassembly")
        .EUt(7680)
        .duration(800)

    gtr.assembler("gtlcore:heat_exchanger")
        .itemInputs("gtceu:iv_machine_hull", "8x gtceu:tungsten_carbide_huge_fluid_pipe", "16x gtceu:mar_m_200_steel_gear", "16x gtceu:lapis_plate", "16x gtceu:diamond_plate", "16x gtceu:obsidian_plate", "8x gtceu:double_mar_m_200_steel_plate", "16x gtceu:double_tungsten_steel_plate", "16x gtceu:double_tungsten_steel_plate")
        .inputFluids("gtceu:redstone 5760")
        .itemOutputs("gtlcore:heat_exchanger")
        .EUt(GTValues.VA[GTValues.EV])
        .duration(400)

    gtr.assembler("gtlcore:supercritical_steam_turbine")
        .itemInputs("gtceu:luv_machine_hull", "4x #gtceu:circuits/luv", "2x gtceu:luv_electric_motor", "2x gtceu:mar_m_200_steel_gear", "2x gtceu:tungsten_carbide_large_fluid_pipe", "8x gtceu:mar_m_200_steel_plate")
        .itemOutputs("gtlcore:supercritical_steam_turbine")
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(200)

    gtr.assembler("gtlcore:supercritical_mega_steam_turbine")
        .itemInputs("8x gtlcore:supercritical_steam_turbine", "8x #gtceu:circuits/uv", "8x gtceu:luv_electric_piston", "16x gtceu:luv_electric_pump", "8x gtceu:naquadah_turbine_blade", "8x gtceu:double_hsss_plate", "32x gtceu:double_mar_m_200_steel_plate")
        .itemOutputs("gtlcore:supercritical_mega_steam_turbine")
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(1200)

    gtr.assembler("gtlcore:fission_reactor")
        .itemInputs("gtceu:iv_machine_hull", "4x #gtceu:circuits/iv", "gtceu:computer_monitor_cover", "4x gtceu:neutron_reflector", "8x gtceu:dense_reactor_steel_plate")
        .inputFluids("gtceu:soldering_alloy 288")
        .itemOutputs("gtlcore:fission_reactor")
        .EUt(480)
        .duration(200)

    gtr.assembler("gtlcore:advanced_integrated_ore_processor")
        .itemInputs("16x gtlcore:integrated_ore_processor", "64x gtceu:crushing_wheels", "32x #gtceu:circuits/uiv", "16x gtceu:uiv_robot_arm", "32x gtceu:uiv_conveyor_module", "8x gtceu:uiv_electric_pump", "8x gtceu:uiv_emitter", "64x gtceu:double_dalisenite_plate", "64x gtceu:double_dalisenite_plate")
        .inputFluids("gtceu:inconel_792 82944")
        .itemOutputs("gtlcore:advanced_integrated_ore_processor")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(800)

    gtr.assembler("gtlcore:vacuum_drying_furnace")
        .itemInputs("gtceu:hsse_frame", "4x gtlcore:iv_dehydrator", "2x gtceu:double_titanium_tungsten_carbide_plate", "4x #gtceu:circuits/iv", "2x gtceu:iv_electric_piston", "3x gtceu:iridium_gear", "6x gtceu:small_titanium_gear", "24x gtceu:tantalloy_61_screw")
        .inputFluids("gtceu:platinum 1152")
        .itemOutputs("gtlcore:vacuum_drying_furnace")
        .EUt(GTValues.VA[GTValues.HV])
        .duration(600)

    gtr.assembler("gtlcore:flotation_cell")
        .itemInputs("7x gtceu:hastelloy_n_75_plate", "gtceu:assembly_line_grating", "gtceu:iv_electric_pump")
        .itemOutputs("gtlcore:flotation_cell")
        .EUt(GTValues.VA[GTValues.IV])
        .duration(400)

    gtr.assembler("gtlcore:digestion_tank")
        .itemInputs("gtceu:tungsten_steel_frame", "4x #gtceu:circuits/iv", "2x gtceu:iv_electric_pump", "4x gtceu:chromium_normal_fluid_pipe", "4x gtceu:double_electrum_plate", "4x gtceu:double_cupronickel_plate", "4x gtceu:double_tungsten_steel_plate")
        .itemOutputs("gtlcore:digestion_tank")
        .EUt(120)
        .duration(400)

    gtr.assembler("gtlcore:dissolving_tank")
        .itemInputs("gtceu:ev_machine_hull", "4x #gtceu:circuits/ev", "4x gtceu:ev_electric_pump", "4x gtceu:gold_normal_fluid_pipe", "8x gtceu:double_stainless_steel_plate")
        .itemOutputs("gtlcore:dissolving_tank")
        .EUt(120)
        .duration(400)

    gtr.assembler("gtlcore:grind_ball_hatch")
        .itemInputs("gtceu:vanadium_steel_frame", "gtceu:iv_input_bus", "8x gtceu:titanium_gear", "gtceu:double_tungsten_steel_plate", "32x gtceu:tungsten_steel_foil", "16x gtceu:fine_tin_wire")
        .inputFluids("gtceu:tungsten 1152")
        .itemOutputs("gtlcore:grind_ball_hatch")
        .duration(400)
        .EUt(480)

    gtr.assembler("gtlcore:radiation_hatch")
        .itemInputs("gtceu:zpm_input_bus", "8x gtceu:graphite_block", "16x gtceu:double_lead_plate", "gtceu:computer_monitor_cover")
        .inputFluids("gtceu:tin 2304")
        .itemOutputs("gtlcore:radiation_hatch")
        .duration(400)
        .EUt(1920)

    gtr.assembler("gtlcore:rotor_hatch")
        .itemInputs("gtceu:ev_input_bus", "gtceu:advanced_item_detector_cover", "4x gtceu:sterling_silver_large_restrictive_item_pipe", "16x gtceu:ev_conveyor_module")
        .inputFluids("gtceu:tin 2304")
        .itemOutputs("gtlcore:rotor_hatch")
        .duration(400)
        .EUt(480)
})