ServerEvents.recipes(event => {
    const gtr = event.recipes.gtceu

    gtr.dehydrator("gtlcore:germanium_dioxide_dust")
        .inputFluids("gtceu:germanium_tetrachloride_solution 1000", "gtceu:hydrogen 4000")
        .itemOutputs("3x gtceu:germanium_dioxide_dust")
        .outputFluids("gtceu:hydrochloric_acid 4000")
        .EUt(30)
        .duration(800)

    gtr.dehydrator("gtlcore:boron_trioxide_dust")
        .inputFluids("gtceu:boric_acide 2000")
        .itemOutputs("5x gtceu:boron_trioxide_dust")
        .EUt(GTValues.VA[GTValues.HV])
        .duration(400)

    gtr.dehydrator("gtlcore:zeolite_sieving_pellets_dust")
        .itemInputs("gtceu:wet_zeolite_sieving_pellets_dust")
        .itemOutputs("gtceu:zeolite_sieving_pellets_dust")
        .EUt(120)
        .duration(50)

    gtr.dehydrator("gtlcore:phthalic_anhydride_dust")
        .inputFluids("gtceu:phthalic_acid 1000")
        .itemOutputs("15x gtceu:phthalic_anhydride_dust")
        .EUt(480)
        .duration(400)

    gtr.dehydrator("gtlcore:graphene_iron_plate")
        .notConsumable("gtceu:long_yttrium_barium_cuprate_rod")
        .inputFluids("gtceu:glucose_iron_solution 1000")
        .itemOutputs("gtlcore:graphene_iron_plate")
        .EUt(120)
        .duration(40)

    gtr.dehydrator("gtlcore:monomethylhydrazine")
        .inputFluids("gtceu:hydrazine 1000", "gtceu:hydrogen 2000")
        .itemInputs("gtceu:carbon_dust")
        .outputFluids("gtceu:monomethylhydrazine 1000")
        .EUt(240)
        .duration(240)

    gtr.dehydrator("gtlcore:la_nd_oxides_solution")
        .inputFluids("gtceu:la_nd_oxides_solution 4000")
        .chancedOutput("5x gtceu:lanthanum_oxide_dust", 4300, 275)
        .chancedOutput("5x gtceu:cerium_oxide_dust", 4300, 275)
        .chancedOutput("5x gtceu:praseodymium_oxide_dust", 4300, 275)
        .chancedOutput("5x gtceu:neodymium_oxide_dust", 4300, 275)
        .EUt(480)
        .duration(220)

    gtr.dehydrator("gtlcore:sm_gd_oxides_solution")
        .inputFluids("gtceu:sm_gd_oxides_solution 4000")
        .chancedOutput("5x gtceu:scandium_oxide_dust", 4300, 275)
        .chancedOutput("5x gtceu:samarium_oxide_dust", 4300, 275)
        .chancedOutput("5x gtceu:europium_oxide_dust", 4300, 275)
        .chancedOutput("5x gtceu:gadolinium_oxide_dust", 4300, 275)
        .EUt(480)
        .duration(220)

    gtr.dehydrator("gtlcore:tb_ho_oxides_solution")
        .inputFluids("gtceu:tb_ho_oxides_solution 4000")
        .chancedOutput("5x gtceu:yttrium_oxide_dust", 4300, 275)
        .chancedOutput("5x gtceu:terbium_oxide_dust", 4300, 275)
        .chancedOutput("5x gtceu:dysprosium_oxide_dust", 4300, 275)
        .chancedOutput("5x gtceu:holmium_oxide_dust", 4300, 275)
        .EUt(480)
        .duration(220)

    gtr.dehydrator("gtlcore:er_lu_oxides_solution")
        .inputFluids("gtceu:er_lu_oxides_solution 4000")
        .chancedOutput("5x gtceu:erbium_oxide_dust", 4300, 275)
        .chancedOutput("5x gtceu:thulium_oxide_dust", 4300, 275)
        .chancedOutput("5x gtceu:ytterbium_oxide_dust", 4300, 275)
        .chancedOutput("5x gtceu:lutetium_oxide_dust", 4300, 275)
        .EUt(480)
        .duration(220)

    gtr.dehydrator("gtlcore:polyimide")
        .inputFluids("gtceu:paa 144")
        .outputFluids("gtceu:polyimide 144")
        .EUt(30)
        .duration(270)

    gtr.dehydrator("gtlcore:stearic_acid")
        .inputFluids("gtceu:deglycerated_soap 1000")
        .outputFluids("gtceu:stearic_acid 800")
        .itemOutputs("gtceu:salt_dust")
        .EUt(2000)
        .duration(160)

    gtr.dehydrator("gtlcore:tungsten_trioxide_dust")
        .itemInputs("7x gtceu:tungstic_acid_dust")
        .itemOutputs("4x gtceu:tungsten_trioxide_dust")
        .EUt(120)
        .duration(150)

    gtr.dehydrator("gtlcore:silica_gel_dust")
        .inputFluids("gtceu:silica_gel_base 1000")
        .itemOutputs("3x gtceu:silica_gel_dust", "2x gtceu:salt_dust")
        .EUt(480)
        .duration(130)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.dehydrator("gtlcore:salt_dust")
        .inputFluids("gtceu:salt_water 1000")
        .itemOutputs("2x gtceu:salt_dust")
        .EUt(30)
        .duration(160)

    gtr.dehydrator("gtlcore:residual_triniite_solution")
        .inputFluids("gtceu:residual_triniite_solution 2000")
        .itemOutputs("1x gtceu:salt_dust", "20x gtceu:sodium_nitrate_dust")
        .chancedOutput("2x gtceu:naquadria_dust", 4800, 0)
        .chancedOutput("1x gtceu:enriched_naquadah_dust", 5200, 0)
        .EUt(GTValues.VA[GTValues.IV])
        .duration(190)

    gtr.dehydrator("gtlcore:diethyl_ether")
        .circuit(1)
        .notConsumableFluid("gtceu:sulfuric_acid 1000")
        .inputFluids("gtceu:ethanol 2000")
        .outputFluids("gtceu:diethyl_ether 1000")
        .EUt(750)
        .duration(120)

})