ServerEvents.recipes(event => {
    const gtr = event.recipes.gtceu

    gtr.centrifuge("gtlcore:free_electron_gas")
        .notConsumable("gtlcore:separation_electromagnet")
        .inputFluids("gtceu:uu_matter 1000")
        .outputFluids("gtceu:free_electron_gas 1000", "gtceu:free_alpha_gas 500")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(200)

    gtr.centrifuge("gtlcore:quark_gluon")
        .notConsumable("gtlcore:separation_electromagnet")
        .inputFluids("gtceu:quark_gluon_plasma 1000")
        .outputFluids("gtceu:heavy_quarks 200", "gtceu:light_quarks 600", "gtceu:gluons 200")
        .cleanroom(CleanroomType.CLEANROOM)
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(100)

    gtr.centrifuge("nuclear_waste")
        .itemInputs("gtlcore:nuclear_waste")
        .itemOutputs("gtceu:tiny_plutonium_dust",
            "gtceu:tiny_polonium_dust",
            "gtceu:tiny_uranium_dust",
            "gtceu:tiny_thorium_dust",
            "gtceu:tiny_protactinium_dust",
            "gtceu:tiny_neptunium_dust")
        .EUt(2048)
        .duration(200)

    gtr.centrifuge("gtlcore:iodine_dust")
        .inputFluids("gtceu:iodine_containing_slurry 1000")
        .itemOutputs("gtceu:iodine_dust", "2x gtceu:rock_salt_dust")
        .EUt(120)
        .duration(200)

    gtr.centrifuge("gtlcore:clean_bedrock_solution")
        .inputFluids("gtceu:bedrock_soot_solution 2000")
        .itemOutputs("gtceu:small_naquadah_dust", "gtceu:tiny_enriched_naquadah_dust", "gtceu:tiny_naquadria_dust")
        .outputFluids("gtceu:clean_bedrock_solution 1000")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(200)

    gtr.centrifuge("gtlcore:inert_residues_dust")
        .notConsumable("gtlcore:separation_electromagnet")
        .itemInputs("10x gtceu:metal_residue_dust")
        .inputFluids("gtceu:distilled_water 10000")
        .itemOutputs("gtceu:inert_residues_dust")
        .outputFluids("gtceu:oxidized_residual_solution 10000")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(200)

    gtr.centrifuge("gtlcore:superheavyradox")
        .inputFluids("gtceu:superheavyradox 1000")
        .outputFluids("gtceu:heavyradox 2000")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(200)

    gtr.centrifuge("gtlcore:dragon_element")
        .inputFluids("gtceu:turbid_dragon_blood 1000")
        .outputFluids("gtceu:dragon_element 500")
        .itemOutputs("gtceu:collagen_dust")
        .EUt(7680)
        .duration(200)
        .cleanroom(GTLCleanroomType.LAW_CLEANROOM)

    gtr.centrifuge("gtlcore:titanium_50_tetrafluoride")
        .inputFluids("gtceu:titanium_tetrafluoride 1000")
        .outputFluids("gtceu:titanium_50_tetrafluoride 10", "gtceu:titanium_tetrafluoride 990")
        .EUt(480)
        .duration(200)

    gtr.centrifuge("gtlcore:taranium_enriched_liquid_helium_3")
        .notConsumable("gtlcore:separation_electromagnet")
        .inputFluids("gtceu:dusty_liquid_helium_iii 1000")
        .outputFluids("gtceu:taranium_enriched_liquid_helium_3 500")
        .EUt(3000)
        .duration(400)

    gtr.centrifuge("gtlcore:tcetiedandelions")
        .inputFluids("gtceu:seaweedbroth 1000")
        .itemOutputs("64x gtlcore:tcetiedandelions")
        .EUt(120)
        .duration(200)
        .addCondition(new GravityCondition(false))

    gtr.centrifuge("gtlcore:flerovium")
        .inputFluids("gtceu:flyb_plasma 1000")
        .outputFluids("gtceu:flerovium 288", "gtceu:ytterbium_178 288")
        .EUt(1920)
        .duration(290)

    gtr.centrifuge("gtlcore:fissioned_uranium_235_dust")
        .itemInputs("gtceu:fissioned_uranium_235_dust")
        .itemOutputs("enderio:powdered_tin", "gtceu:technetium_dust")
        .EUt(1920)
        .duration(400)

    gtr.centrifuge("gtlcore:uranium_sulfate_waste_solution")
        .inputFluids("gtceu:uranium_sulfate_waste_solution 1000")
        .itemOutputs("gtceu:tiny_lead_dust", "gtceu:tiny_barium_dust", "gtceu:tiny_strontium_dust", "gtceu:tiny_radium_dust")
        .outputFluids("gtceu:diluted_sulfuric_acid 1000")
        .EUt(480)
        .duration(500)

    gtr.centrifuge("gtlcore:grade_1_purified_water")
        .inputFluids("minecraft:water 1000")
        .chancedOutput("gtceu:small_stone_dust", 5000, 0)
        .chancedOutput("gtceu:small_clay_dust", 2000, 0)
        .chancedOutput("gtceu:small_calcite_dust", 1000, 0)
        .chancedOutput("gtceu:small_salt_dust", 1000, 0)
        .chancedOutput("gtceu:polyethylene_nugget", 100, 0)
        .outputFluids("gtceu:grade_1_purified_water 900")
        .EUt(1920)
        .duration(200)

    gtr.centrifuge("gtlcore:rare_earth_chlorides")
        .notConsumable("gtceu:hv_item_magnet")
        .inputFluids("gtceu:rare_earth_chlorides 2000")
        .outputFluids("gtceu:la_nd_oxides_solution 250",
            "gtceu:sm_gd_oxides_solution 250",
            "gtceu:tb_ho_oxides_solution 250",
            "gtceu:er_lu_oxides_solution 250",
            "gtceu:hydrochloric_acid 1000")
        .EUt(480)
        .duration(200)

    gtr.centrifuge("gtlcore:neutronium_block")
        .notConsumable("gtceu:neutronium_nanoswarm")
        .itemInputs("avaritia:neutron")
        .itemOutputs("9x gtceu:naquadah_dust", "9x gtceu:neutronium_dust")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(800)

    gtr.centrifuge("gtlcore:actinium_radium_nitrate_solution")
        .notConsumable("1x gtceu:trifluoroacetic_phosphate_ester_dust")
        .inputFluids("gtceu:actinium_radium_nitrate_solution 13000")
        .itemOutputs("26x gtceu:actinium_nitrate_dust", "27x gtceu:radium_nitrate_dust")
        .chancedOutput("4x gtceu:francium_dust", 2500, 0)
        .chancedOutput("1x gtceu:thorium_dust", 2500, 0)
        .chancedOutput("2x gtceu:protactinium_dust", 2500, 0)
        .chancedOutput("1x gtceu:radium_dust", 2500, 0)
        .outputFluids("minecraft:water 13000")
        .EUt(GTValues.VA[GTValues.HV])
        .duration(160)

    gtr.centrifuge("gtlcore:heavily_fluorinated_trinium_solution")
        .inputFluids("gtceu:heavily_fluorinated_trinium_solution 8000")
        .itemOutputs("60x gtceu:trinium_tetrafluoride_dust")
        .outputFluids("gtceu:fluorine 16000", "gtceu:perfluorobenzene 2000")
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(350)

    gtr.rare_earth_centrifugal("gtlcore:raw_adamantine")
        .itemInputs("gtceu:naquadah_contain_rare_earth_dust")
        .chancedOutput("gtceu:raw_adamantine_compounds", 5000, 1000)
        .itemOutputs("6x gtceu:enriched_naquadah_sulfate_dust", "6x gtceu:naquadria_sulfate_dust")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(200)

    gtr.rare_earth_centrifugal("gtlcore:rare_earth_centrifugal")
        .itemInputs("gtceu:rare_earth_metal_dust")
        .itemOutputs("gtceu:small_lanthanum_dust",
            "gtceu:small_cerium_dust",
            "gtceu:small_neodymium_dust",
            "gtceu:small_promethium_dust",
            "gtceu:small_samarium_dust",
            "gtceu:small_europium_dust",
            "gtceu:small_praseodymium_dust",
            "gtceu:small_gadolinium_dust",
            "gtceu:small_terbium_dust",
            "gtceu:small_dysprosium_dust",
            "gtceu:small_holmium_dust",
            "gtceu:small_erbium_dust",
            "gtceu:small_thulium_dust",
            "gtceu:small_ytterbium_dust",
            "gtceu:small_scandium_dust",
            "gtceu:small_lutetium_dust",
            "gtceu:small_yttrium_dust")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(200)
})