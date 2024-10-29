ServerEvents.recipes(event => {
    const gtr = event.recipes.gtceu

    gtr.weather_control("1")
        .circuit(1)
        .duration(200)
        .EUt(30)

    gtr.weather_control("2")
        .circuit(2)
        .duration(200)
        .EUt(30)

    gtr.weather_control("3")
        .circuit(3)
        .duration(200)
        .EUt(30)

    gtr.block_conversion("1")
        .circuit(1)
        .duration(400)
        .EUt(128)

    gtr.slaughterhouse("1")
        .circuit(1)
        .duration(20)
        .EUt(128)

    gtr.slaughterhouse("2")
        .circuit(2)
        .duration(20)
        .EUt(128)

    gtr.space_elevator("1")
        .circuit(1)
        .duration(400)
        .CWUt(128)
        .EUt(GTValues.VA[GTValues.UV])

    gtr.door_of_create("1")
        .circuit(1)
        .EUt(4 * GTValues.VA[GTValues.MAX])
        .duration(20)
        .dimension("minecraft:overworld")

    gtr.create_aggregation("1")
        .circuit(1)
        .EUt(16 * GTValues.VA[GTValues.MAX])
        .duration(20)
        .CWUt(GTValues.VA[GTValues.MAX])
        .dimension("kubejs:create")

    for (let index = 0; index < 8; index++) {
        gtr.bedrock_drilling_rig("gtlcore:bedrock_dust_" + index)
            .chancedInput(Math.pow(4, index) + "x gtlcore:bedrock_drill", 10, 0)
            .itemOutputs(Math.pow(4, index) + "x gtceu:bedrock_dust")
            .EUt(GTValues.VA[GTValues.UEV])
            .circuit(index + 1)
            .duration(200 * Math.pow(2, index))
    }

    gtr.decay_hastener("gtceu:rutherfordium_dust")
        .inputFluids("gtceu:seaborgium 144")
        .itemOutputs("gtceu:rutherfordium_dust")
        .EUt(480)
        .duration(4000)

    gtr.decay_hastener("gtceu:rutherfordium_dust1")
        .inputFluids("gtceu:actinium 144")
        .itemOutputs("gtceu:rutherfordium_dust")
        .EUt(480)
        .duration(8000)

    gtr.decay_hastener("gtceu:actinium_dust")
        .inputFluids("gtceu:radium 144")
        .itemOutputs("gtceu:actinium_dust")
        .EUt(480)
        .duration(2000)

    gtr.decay_hastener("gtceu:flyb_plasma")
        .inputFluids("gtceu:quasifissioning_plasma 1000")
        .outputFluids("gtceu:flyb_plasma 1000")
        .EUt(122880)
        .duration(160)

    gtr.decay_hastener("gtceu:hafnium")
        .inputFluids("gtceu:ytterbium_178 144")
        .outputFluids("gtceu:hafnium 144")
        .EUt(30720)
        .duration(120)

    gtr.decay_hastener("gtceu:polonium_dust")
        .inputFluids("gtceu:bismuth 144")
        .itemOutputs("gtceu:polonium_dust")
        .EUt(480)
        .duration(8000)

    gtr.decay_hastener("gtceu:copper76_dust")
        .inputFluids("gtceu:copper 144")
        .itemOutputs("gtceu:copper76_dust")
        .EUt(1920)
        .duration(4000)

    gtr.decay_hastener("gtceu:meitnerium_dust")
        .inputFluids("gtceu:hassium 144")
        .itemOutputs("gtceu:meitnerium_dust")
        .EUt(480)
        .duration(8000)

    gtr.large_recycler("gtlcore:scrap_1")
        .itemInputs("#forge:ingots")
        .itemOutputs("gtlcore:scrap")
        .EUt(480)
        .duration(200)

    gtr.large_recycler("gtlcore:scrap_2")
        .itemInputs("#forge:dusts")
        .itemOutputs("gtlcore:scrap")
        .EUt(120)
        .duration(200)

    gtr.large_recycler("gtlcore:scrap_3")
        .itemInputs("4x #forge:small_dusts")
        .itemOutputs("gtlcore:scrap")
        .EUt(120)
        .duration(200)

    gtr.large_recycler("gtlcore:scrap_4")
        .itemInputs("9x #forge:tiny_dusts")
        .itemOutputs("gtlcore:scrap")
        .EUt(120)
        .duration(200)

    gtr.large_recycler("gtlcore:scrap_5")
        .itemInputs("#forge:storage_blocks")
        .itemOutputs("9x gtlcore:scrap")
        .EUt(1920)
        .duration(400)

    gtr.large_recycler("gtlcore:scrap_6")
        .itemInputs("9x #forge:nuggets")
        .itemOutputs("gtlcore:scrap")
        .EUt(480)
        .duration(200)

    gtr.large_recycler("gtlcore:scrap_7")
        .itemInputs("#forge:gems")
        .itemOutputs("gtlcore:scrap")
        .EUt(480)
        .duration(200)

    gtr.large_recycler("gtlcore:scrap_8")
        .itemInputs("#minecraft:logs")
        .itemOutputs("gtlcore:scrap")
        .EUt(120)
        .duration(200)

    gtr.mass_fabricator("gtlcore:uu_matter")
        .itemInputs("ae2:matter_ball")
        .inputFluids("gtceu:uu_amplifier 10")
        .outputFluids("gtceu:uu_matter 10")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(20)

    gtr.mass_fabricator("gtlcore:quasifissioning_plasma")
        .inputFluids("gtceu:uranium 144")
        .itemInputs("gtceu:uranium_ingot")
        .outputFluids("gtceu:quasifissioning_plasma 144")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(200)

    function space_probe(material, grade, amount, circuit) {
        gtr.space_probe_surface_reception(material + grade)
            .notConsumable("gtlcore:space_probe_mk" + grade)
            .outputFluids(material + " " + amount)
            .EUt(GTValues.VA[GTValues.UEV] * (4 ** grade))
            .duration(200)
            .circuit(circuit)
            .CWUt(64 * (2 ** circuit))
    }

    space_probe("gtceu:starlight", 2, 1000, 2)
    space_probe("gtceu:starlight", 3, 10000, 2)
    space_probe("gtceu:heavy_lepton_mixture", 1, 100, 1)
    space_probe("gtceu:heavy_lepton_mixture", 2, 1000, 1)
    space_probe("gtceu:heavy_lepton_mixture", 3, 10000, 1)
    space_probe("gtceu:cosmic_element", 3, 10000, 3)

    const fishing = [
        ["minecraft:cod", 51],
        ["minecraft:salmon", 21.3],
        ["minecraft:tropical_fish", 1.7],
        ["minecraft:pufferfish", 11.1],
        [Item.of("minecraft:bow", "{Damage:100}").weakNBT(), 0.8],
        ["minecraft:experience_bottle", 0.8],
        ["minecraft:name_tag", 0.8],
        ["minecraft:nautilus_shell", 0.8],
        ["minecraft:saddle", 0.8],
        ["minecraft:lily_pad", 1.7],
        ["minecraft:bowl", 1],
        [Item.of("minecraft:fishing_rod", "{Damage:30,RepairCost:3}").enchant("minecraft:luck_of_the_sea", 2).enchant("minecraft:lure", 2).weakNBT(), 0.2],
        ["minecraft:leather", 1],
        ["minecraft:rotten_flesh", 1],
        ["minecraft:stick", 0.5],
        ["minecraft:string", 0.5],
        ["minecraft:potion", 1],
        ["minecraft:bone", 1],
        ["gtceu:damascus_steel_nugget", 0.05],
        ["minecraft:ink_sac", 0.1],
        ["minecraft:tripwire_hook", 1],
        ["gtceu:ancient_gold_coin", 0.024],
        ["avaritia:neutron_pile", 0.019],
        ["gtlcore:zero_point_module_fragments", 0.012]
    ]
    const a = [[1, 1], [2, 1.1], [3, 1.2], [4, 1.8]]
    a.forEach((fish) => {
        let recipe = gtr.fishing_ground("fishing" + fish[0])
            .notConsumable((4 ** fish[0]) / 4 + "x minecraft:fishing_rod")
            .circuit(fish[0])
            .EUt(30)
            .duration(200)
        fishing.forEach(item => {
            recipe.chancedOutput(item[0], (100 * item[1]) * fish[1], 0)
        })
    })

    gtr.packer("gtlcore:zero_point_module")
        .itemInputs("64x gtlcore:zero_point_module_fragments")
        .itemOutputs(Item.of("gtceu:zero_point_module", "{Charge:2000000000000L}").weakNBT())
        .EUt(120)
        .duration(2000)

    gtr.packer("gtlcore:scrap_box")
        .itemInputs("9x gtlcore:scrap")
        .itemOutputs("gtlcore:scrap_box")
        .EUt(12)
        .duration(200)

    gtr.packer("gtlcore:tiny_degenerate_rhenium_dust")
        .itemInputs("gtceu:degenerate_rhenium_dust")
        .itemOutputs("9x gtceu:tiny_degenerate_rhenium_dust")
        .EUt(1920)
        .duration(20)

    gtr.packer("gtlcore:magmatter_dust")
        .itemInputs("gtceu:transcendent_metal_nanoswarm")
        .itemInputs("4x gtceu:small_magmatter_dust")
        .itemOutputs("gtceu:contaminable_transcendent_metal_nanoswarm")
        .itemOutputs("gtceu:magmatter_dust")
        .EUt(30)
        .duration(20)

    gtr.fishing_ground("fishing_ground1")
        .notConsumable("64x minecraft:cod")
        .itemInputs("64x gtceu:tiny_meat_dust")
        .itemOutputs("32x minecraft:cod")
        .EUt(1)
        .duration(2000)

    gtr.fishing_ground("fishing_ground2")
        .notConsumable("64x minecraft:salmon")
        .itemInputs("64x gtceu:tiny_meat_dust")
        .itemOutputs("32x minecraft:salmon")
        .EUt(1)
        .duration(2000)

    gtr.fishing_ground("fishing_ground3")
        .notConsumable("64x minecraft:tropical_fish")
        .itemInputs("64x gtceu:tiny_meat_dust")
        .itemOutputs("32x minecraft:tropical_fish")
        .EUt(1)
        .duration(2000)

    gtr.fishing_ground("fishing_ground4")
        .notConsumable("64x minecraft:pufferfish")
        .itemInputs("64x gtceu:tiny_meat_dust")
        .itemOutputs("32x minecraft:pufferfish")
        .EUt(1)
        .duration(2000)

    gtr.matter_fabricator("gtlcore:uu_amplifier")
        .itemInputs("gtlcore:scrap")
        .circuit(1)
        .outputFluids("gtceu:uu_amplifier 1")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(200)

    gtr.matter_fabricator("gtlcore:uu_amplifier_a")
        .itemInputs("gtlcore:scrap_box")
        .circuit(1)
        .outputFluids("gtceu:uu_amplifier 9")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(200)

    gtr.matter_fabricator("gtlcore:uu_amplifier_1")
        .itemInputs("gtlcore:scrap")
        .circuit(2)
        .itemOutputs("64x ae2:matter_ball")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(1)

    gtr.matter_fabricator("gtlcore:uu_amplifier_2")
        .itemInputs("gtlcore:scrap_box")
        .circuit(2)
        .itemOutputs("576x ae2:matter_ball")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(1)

    gtr.cosmos_simulation("cosmos_simulation1")
        .itemInputs("gtlcore:quantum_chromodynamic_charge")
        .itemOutputs("131072x gtceu:carbon_dust",
            "131072x gtceu:phosphorus_dust",
            "131072x gtceu:sulfur_dust",
            "131072x gtceu:selenium_dust",
            "131072x gtceu:iodine_dust",
            "131072x gtceu:boron_dust",
            "131072x gtceu:silicon_dust",
            "131072x gtceu:germanium_dust",
            "131072x gtceu:arsenic_dust",
            "131072x gtceu:antimony_dust",
            "131072x gtceu:tellurium_dust",
            "131072x gtceu:astatine_dust",
            "131072x gtceu:aluminium_dust",
            "131072x gtceu:gallium_dust",
            "131072x gtceu:indium_dust",
            "131072x enderio:powdered_tin",
            "131072x gtceu:thallium_dust",
            "131072x gtceu:lead_dust",
            "131072x gtceu:bismuth_dust",
            "131072x gtceu:polonium_dust",
            "131072x gtceu:titanium_dust",
            "131072x gtceu:vanadium_dust",
            "131072x gtceu:chromium_dust",
            "131072x gtceu:manganese_dust",
            "131072x enderio:powdered_iron",
            "131072x enderio:powdered_cobalt",
            "131072x gtceu:nickel_dust",
            "131072x enderio:powdered_copper",
            "131072x gtceu:zinc_dust",
            "131072x gtceu:zirconium_dust",
            "131072x gtceu:niobium_dust",
            "131072x gtceu:molybdenum_dust",
            "131072x gtceu:technetium_dust",
            "131072x gtceu:ruthenium_dust",
            "131072x gtceu:rhodium_dust",
            "131072x gtceu:palladium_dust",
            "131072x gtceu:silver_dust",
            "131072x gtceu:cadmium_dust",
            "131072x gtceu:hafnium_dust",
            "131072x gtceu:tantalum_dust",
            "131072x gtceu:tungsten_dust",
            "131072x gtceu:rhenium_dust",
            "131072x gtceu:osmium_dust",
            "131072x gtceu:iridium_dust",
            "131072x gtceu:platinum_dust",
            "131072x enderio:powdered_gold",
            "131072x gtceu:beryllium_dust",
            "131072x gtceu:magnesium_dust",
            "131072x gtceu:calcium_dust",
            "131072x gtceu:strontium_dust",
            "131072x gtceu:barium_dust",
            "131072x gtceu:radium_dust",
            "131072x gtceu:yttrium_dust",
            "131072x gtceu:lithium_dust",
            "131072x gtceu:sodium_dust",
            "131072x gtceu:potassium_dust",
            "131072x gtceu:rubidium_dust",
            "131072x gtceu:caesium_dust",
            "131072x gtceu:francium_dust",
            "131072x gtceu:scandium_dust",
            "131072x gtceu:actinium_dust",
            "131072x gtceu:thorium_dust",
            "131072x gtceu:protactinium_dust",
            "131072x gtceu:uranium_dust",
            "131072x gtceu:neptunium_dust",
            "131072x gtceu:plutonium_dust",
            "131072x gtceu:americium_dust",
            "131072x gtceu:curium_dust",
            "131072x gtceu:berkelium_dust",
            "131072x gtceu:californium_dust",
            "131072x gtceu:einsteinium_dust",
            "131072x gtceu:fermium_dust",
            "131072x gtceu:mendelevium_dust",
            "131072x gtceu:nobelium_dust",
            "131072x gtceu:lawrencium_dust",
            "131072x gtceu:lanthanum_dust",
            "131072x gtceu:cerium_dust",
            "131072x gtceu:praseodymium_dust",
            "131072x gtceu:neodymium_dust",
            "131072x gtceu:promethium_dust",
            "131072x gtceu:samarium_dust",
            "131072x gtceu:europium_dust",
            "131072x gtceu:gadolinium_dust",
            "131072x gtceu:terbium_dust",
            "131072x gtceu:dysprosium_dust",
            "131072x gtceu:holmium_dust",
            "131072x gtceu:erbium_dust",
            "131072x gtceu:thulium_dust",
            "131072x gtceu:ytterbium_dust",
            "131072x gtceu:lutetium_dust",
            "131072x gtceu:rutherfordium_dust",
            "131072x gtceu:dubnium_dust",
            "131072x gtceu:seaborgium_dust",
            "131072x gtceu:bohrium_dust",
            "131072x gtceu:hassium_dust",
            "131072x gtceu:meitnerium_dust",
            "131072x gtceu:darmstadtium_dust",
            "131072x gtceu:roentgenium_dust",
            "131072x gtceu:copernicium_dust",
            "131072x gtceu:nihonium_dust",
            "131072x gtceu:flerovium_dust",
            "131072x gtceu:moscovium_dust",
            "131072x gtceu:livermorium_dust",
            "131072x gtceu:tennessine_dust",
            "131072x gtceu:oganesson_dust",
            "131072x gtceu:jasper_dust",
            "131072x gtceu:naquadah_dust",
            "131072x gtceu:enriched_naquadah_dust",
            "131072x gtceu:naquadria_dust",
            "131072x gtceu:duranium_dust",
            "131072x gtceu:tritanium_dust",
            "131072x gtceu:mithril_dust",
            "131072x gtceu:orichalcum_dust",
            "131072x gtceu:enderium_dust",
            "131072x gtceu:adamantine_dust",
            "131072x gtceu:vibranium_dust",
            "131072x gtceu:infuscolium_dust",
            "131072x gtceu:taranium_dust",
            "131072x gtceu:draconium_dust",
            "131072x gtceu:starmetal_dust")
        .outputFluids("gtceu:spacetime 256",
            "gtceu:raw_star_matter_plasma 1310720",
            "gtceu:quark_gluon_plasma 1310720",
            "gtceu:heavy_quark_degenerate_matter_plasma 1310720",
            "gtceu:neutronium 13107200",
            "gtceu:heavy_lepton_mixture 13107200",
            "gtceu:hydrogen 131072000",
            "gtceu:nitrogen 131072000",
            "gtceu:oxygen 131072000",
            "gtceu:fluorine 131072000",
            "gtceu:chlorine 131072000",
            "gtceu:bromine 131072000",
            "gtceu:helium 131072000",
            "gtceu:neon 131072000",
            "gtceu:argon 131072000",
            "gtceu:krypton 131072000",
            "gtceu:xenon 131072000",
            "gtceu:radon 131072000",
            "gtceu:mercury 131072000",
            "gtceu:deuterium 131072000",
            "gtceu:tritium 131072000",
            "gtceu:helium_3 131072000",
            "gtceu:unknowwater 131072000",
            "gtceu:uu_matter 131072000")
        .duration(1200)
        .inputFluids("gtceu:cosmic_element 1024000")

    gtr.large_gas_collector("1")
        .notConsumable("kubejs:overworld_data")
        .outputFluids("gtceu:air 100000")
        .circuit(1)
        .EUt(120)
        .duration(200)

    gtr.large_gas_collector("2")
        .notConsumable("2x kubejs:nether_data")
        .outputFluids("gtceu:nether_air 100000")
        .circuit(1)
        .EUt(480)
        .duration(200)

    gtr.large_gas_collector("3")
        .notConsumable("4x kubejs:end_data")
        .outputFluids("gtceu:ender_air 100000")
        .circuit(1)
        .EUt(1920)
        .duration(200)

    gtr.large_gas_collector("4")
        .notConsumable("kubejs:overworld_data")
        .notConsumable("gtceu:vacuum_freezer")
        .outputFluids("gtceu:liquid_air 100000")
        .EUt(480)
        .duration(2000)

    gtr.large_gas_collector("5")
        .notConsumable("2x kubejs:nether_data")
        .notConsumable("gtceu:vacuum_freezer")
        .outputFluids("gtceu:liquid_nether_air 100000")
        .EUt(1920)
        .duration(2000)

    gtr.large_gas_collector("6")
        .notConsumable("4x kubejs:end_data")
        .notConsumable("gtceu:vacuum_freezer")
        .outputFluids("gtceu:liquid_ender_air 100000")
        .EUt(7680)
        .duration(2000)

    gtr.gas_collector("gtlcore:void")
        .outputFluids("gtceu:air 10000")
        .EUt(16)
        .circuit(4)
        .duration(200)
        .dimension("kubejs:void")

    gtr.gas_collector("gtlcore:flat")
        .outputFluids("gtceu:air 10000")
        .EUt(16)
        .circuit(5)
        .duration(200)
        .dimension("kubejs:flat")

    gtr.gas_collector("gtlcore:barnarda")
        .outputFluids("gtceu:barnarda_air 10000")
        .EUt(1024)
        .circuit(6)
        .duration(200)
        .dimension("kubejs:barnarda")

    gtr.large_boiler("gtlcore:tin_bucket")
        .itemInputs("1x gtceu:tin_ingot")
        .inputFluids("minecraft:lava 100")
        .outputFluids("gtceu:tin 72")
        .duration(5)

    gtr.large_boiler("gtlcore:tin_alloy_ingot")
        .itemInputs("1x gtceu:tin_alloy_ingot")
        .inputFluids("minecraft:lava 100")
        .outputFluids("gtceu:tin_alloy 72")
        .duration(5)

    gtr.desulfurizer("gtlcore:light_fuel")
        .inputFluids("gtceu:sulfuric_light_fuel 12000")
        .outputFluids("gtceu:light_fuel 12000")
        .itemOutputs("1x gtceu:sulfur_dust")
        .duration(120)
        .EUt(30)

    gtr.desulfurizer("gtlcore:heavy_fuel")
        .inputFluids("gtceu:sulfuric_heavy_fuel 12000")
        .outputFluids("gtceu:heavy_fuel 12000")
        .itemOutputs("1x gtceu:sulfur_dust")
        .duration(120)
        .EUt(30)

    gtr.desulfurizer("gtlcore:naphtha")
        .inputFluids("gtceu:sulfuric_naphtha 12000")
        .outputFluids("gtceu:naphtha 12000")
        .itemOutputs("1x gtceu:sulfur_dust")
        .duration(120)
        .EUt(30)

    gtr.desulfurizer("gtlcore:gas")
        .inputFluids("gtceu:sulfuric_gas 12000")
        .outputFluids("gtceu:refinery_gas 12000")
        .itemOutputs("1x gtceu:sulfur_dust")
        .duration(120)
        .EUt(30)

    gtr.world_data_scanner("gtlcore:overworld_data")
        .itemInputs("gtceu:data_stick", "64x gtceu:stone_dust")
        .inputFluids("gtceu:pcb_coolant 100", "gtceu:air 64000")
        .itemOutputs("kubejs:overworld_data")
        .EUt(32)
        .duration(4000)
        .dimension("overworld")

    gtr.world_data_scanner("gtlcore:nether_data")
        .itemInputs("2x gtceu:data_stick", "64x gtceu:netherrack_dust")
        .inputFluids("gtceu:pcb_coolant 200", "gtceu:nether_air 64000")
        .itemOutputs("2x kubejs:nether_data")
        .EUt(128)
        .duration(4000)
        .dimension("ad_astra:venus")

    gtr.world_data_scanner("gtlcore:end_data")
        .itemInputs("4x gtceu:data_stick", "64x gtceu:endstone_dust")
        .inputFluids("gtceu:pcb_coolant 400", "gtceu:ender_air 64000")
        .itemOutputs("4x kubejs:end_data")
        .EUt(512)
        .duration(4000)
        .dimension("kubejs:pluto")

    gtr.forge_hammer("gtlcore:long_netherite_rod")
        .itemInputs("2x gtlcore:netherite_rod")
        .itemOutputs("gtlcore:long_netherite_rod")
        .EUt(30)
        .duration(200)

    gtr.forge_hammer("gtlcore:magnetic_long_netherite_rod")
        .itemInputs("2x gtlcore:magnetic_netherite_rod")
        .itemOutputs("gtlcore:magnetic_long_netherite_rod")
        .EUt(30)
        .duration(200)

    gtr.forge_hammer("gtlcore:special_ceramics_dust")
        .itemInputs("minecraft:brown_glazed_terracotta")
        .itemOutputs("gtceu:special_ceramics_dust")
        .EUt(GTValues.VA[GTValues.IV])
        .duration(20)

    gtr.forge_hammer("gtlcore:long_magmatter_rod")
        .itemInputs("2x gtceu:magmatter_rod")
        .itemOutputs("gtceu:long_magmatter_rod")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(300)

    gtr.polarizer("gtlcore:magnetic_netherite_rod")
        .itemInputs("gtlcore:netherite_rod")
        .itemOutputs("gtlcore:magnetic_netherite_rod")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(200)

    gtr.polarizer("gtlcore:magnetic_long_netherite_rod")
        .itemInputs("gtlcore:long_netherite_rod")
        .itemOutputs("gtlcore:magnetic_long_netherite_rod")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(400)

    gtr.polarizer("gtlcore:attuned_tengam_dust")
        .itemInputs("gtceu:purified_tengam_dust")
        .itemOutputs("gtceu:attuned_tengam_dust")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(400)

    gtr.polarizer("gtlcore:small_attuned_tengam_dust")
        .itemInputs("gtceu:small_purified_tengam_dust")
        .itemOutputs("gtceu:small_attuned_tengam_dust")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(400)

    gtr.polarizer("gtlcore:triplet_neutronium_sphere")
        .itemInputs("gtlcore:neutronium_sphere")
        .itemOutputs("gtlcore:triplet_neutronium_sphere")
        .EUt(5000000)
        .duration(200)

    gtr.lightning_processor("gtlcore:naquadah_contain_rare_earth_fluoride_dust")
        .inputFluids("gtceu:rare_earth_chlorides 6000", "gtceu:acidic_enriched_naquadah_solution 3000", "gtceu:acidic_naquadria_solution 3000", "gtceu:hydrofluoric_acid 2000", "gtceu:enriched_naquadah_front 1000")
        .outputFluids("gtceu:hydrochloric_acid 6000")
        .itemInputs("gtceu:alunite_dust")
        .itemOutputs("gtceu:naquadah_contain_rare_earth_fluoride_dust")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(400)

    gtr.lightning_processor("gtlcore:adamantine_compounds_dust_a")
        .notConsumable("gtlcore:microwormhole_generator")
        .itemInputs("4x gtceu:adamantine_compounds_dust")
        .itemOutputs("gtceu:adamantine_dust")
        .inputFluids("gtceu:mana 1000")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(20)

    gtr.lightning_processor("gtlcore:nether_air")
        .itemInputs("64x minecraft:gunpowder")
        .inputFluids("gtceu:blaze 1000", "gtceu:hydrogen_sulfide 10000", "gtceu:sulfur_dioxide 10000", "gtceu:carbon_monoxide 10000", "gtceu:coal_gas 1000", "gtceu:helium 1000")
        .outputFluids("gtceu:nether_air 1000")
        .EUt(120)
        .duration(400)

    gtr.lightning_processor("gtlcore:ender_air")
        .itemInputs("64x enderio:powdered_ender_pearl")
        .inputFluids("gtceu:fuming_nitric_acid 1000", "gtceu:nitrogen_dioxide 10000", "gtceu:helium 10000", "gtceu:radon 1000", "gtceu:deuterium 1000", "gtceu:xenon 1000")
        .outputFluids("gtceu:ender_air 1000")
        .EUt(480)
        .duration(800)

    gtr.lightning_processor("gtlcore:thaumium_dust")
        .itemInputs("8x gtceu:infused_gold_dust", "4x enderio:soul_powder", "4x enderio:powdered_iron", "16x enderio:powdered_lapis_lazuli")
        .inputFluids("gtceu:distilled_water 1000")
        .itemOutputs("16x gtceu:thaumium_dust")
        .EUt(7680)
        .duration(480)

    gtr.lightning_processor("gtlcore:nitric_oxide")
        .inputFluids("gtceu:air 10000")
        .outputFluids("gtceu:nitric_oxide 1000")
        .EUt(120)
        .duration(200)

    gtr.fluid_solidifier("gtlcore:degenerate_rhenium_plate")
        .notConsumable("gtceu:plate_casting_mold")
        .inputFluids("gtceu:liquid_degenerate_rhenium 144")
        .itemOutputs("gtceu:degenerate_rhenium_plate")
        .EUt(7)
        .duration(400)

    gtr.fluid_solidifier("gtlcore:xenoxene_crystal_dust")
        .inputFluids("gtceu:xenoxene_mixture 1000")
        .itemInputs("3x gtceu:perlite_dust")
        .itemOutputs("3x gtceu:xenoxene_crystal_dust")
        .EUt(1920)
        .duration(200)

    gtr.fluid_solidifier("gtlcore:memory_foam_block")
        .notConsumable("gtceu:block_casting_mold")
        .inputFluids("gtceu:viscoelastic_polyurethane_foam 1000")
        .itemOutputs("gtlcore:memory_foam_block")
        .EUt(30)
        .duration(60)

    gtr.fluid_solidifier("gtlcore:pellet_antimatter")
        .inputFluids("gtceu:antimatter 1000")
        .notConsumable("kubejs:ball_field_shape")
        .itemOutputs("gtlcore:pellet_antimatter")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(800)

    gtr.fluid_solidifier("gtlcore:lumin_essence_dust")
        .itemInputs("2x gtceu:high_energy_mixture_dust")
        .inputFluids("gtceu:phosphoric_acid 2000")
        .itemOutputs("gtceu:lumin_essence_dust")
        .EUt(480)
        .duration(200)

    gtr.fluid_solidifier("gtlcore:kevlar_fiber")
        .notConsumable("gtceu:nugget_casting_mold")
        .inputFluids("gtceu:liquidcrystalkevlar 72")
        .itemOutputs("gtlcore:kevlar_fiber")
        .EUt(30)
        .duration(800)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.macerator("gtlcore:degenerate_rhenium_dust")
        .itemInputs("gtceu:degenerate_rhenium_plate")
        .itemOutputs("gtceu:degenerate_rhenium_dust")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(100)

    const echos = [
        "minecraft:echo_shard",
        "minecraft:sculk_catalyst",
        "minecraft:sculk_shrieker",
        "minecraft:sculk_sensor"
    ]
    echos.forEach((echo) => {
        gtr.macerator(echo)
            .itemInputs(echo)
            .itemOutputs("gtceu:echo_shard_dust")
            .EUt(7)
            .duration(100)
    })

    gtr.macerator("gtlcore:essence")
        .itemInputs("gtlcore:essence_block")
        .itemOutputs("gtlcore:essence")
        .chancedOutput("gtlcore:essence", 5000, 400)
        .chancedOutput("gtlcore:essence", 5000, 200)
        .chancedOutput("gtlcore:essence", 5000, 100)
        .EUt(30)
        .duration(200)

    gtr.macerator("gtlcore:spacetime_dust")
        .itemInputs("gtceu:spacetime_ingot")
        .itemOutputs("gtceu:spacetime_dust")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(400)

    gtr.macerator("gtlcore:draconium_dust")
        .itemInputs("gtlcore:draconium_block_charged")
        .itemOutputs("9x gtlcore:draconium_dust", "enderio:powdered_obsidian", "gtceu:ender_eye_dust", "minecraft:redstone")
        .EUt(1920)
        .duration(400)

    gtr.extractor("gtlcore:tannic")
        .itemInputs("minecraft:nether_wart_block")
        .outputFluids("gtceu:tannic 50")
        .EUt(30)
        .duration(200)

    gtr.extractor("gtlcore:dragon_breath")
        .itemInputs("gtlcore:infused_breath")
        .outputFluids("gtceu:dragon_breath 1000")
        .itemOutputs("minecraft:glass_bottle")
        .EUt(30)
        .duration(200)
        .cleanroom(GTLCleanroomType.LAW_CLEANROOM)

    gtr.extractor("gtlcore:milk")
        .itemInputs("minecraft:milk_bucket")
        .itemOutputs("minecraft:bucket")
        .outputFluids("gtceu:milk 1000")
        .EUt(16)
        .duration(60)

    gtr.extractor("gtlcore:milk1")
        .notConsumable("minecraft:cow_spawn_egg")
        .outputFluids("gtceu:milk 100")
        .EUt(30)
        .duration(20)

    gtr.extractor("gtlcore:xpjuice")
        .itemInputs("minecraft:sculk")
        .outputFluids("enderio:xp_juice 100")
        .EUt(120)
        .duration(20)

    gtr.extractor("gtlcore:tcetieseaweedextract")
        .itemInputs("64x gtlcore:tcetiedandelions")
        .itemOutputs("gtlcore:tcetieseaweedextract")
        .EUt(16)
        .duration(200)
        .addCondition(new GravityCondition(false))

    gtr.arc_furnace("gtlcore:germanium_ash_dust")
        .itemInputs("2x gtceu:germanium_containing_precipitate_dust")
        .itemOutputs("gtceu:germanium_ash_dust")
        .EUt(30)
        .duration(120)

    gtr.arc_furnace("gtlcore:anthracene")
        .itemInputs("gtceu:coke_gem")
        .outputFluids("gtceu:anthracene 100")
        .EUt(120)
        .duration(400)

    gtr.arc_furnace("gtlcore:grade_13_purified_water")
        .inputFluids("gtceu:grade_12_purified_water 10000")
        .itemInputs("gtceu:degenerate_rhenium_dust")
        .itemOutputs("gtceu:degenerate_rhenium_plate")
        .outputFluids("gtceu:grade_13_purified_water 9990")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(60)

    gtr.arc_furnace("gtlcore:cosmic_singularity")
        .itemInputs("avaritia:eternal_singularity")
        .inputFluids("gtceu:magneto_hydro_dynamically_con_strained_star_matter 9216")
        .itemOutputs("gtlcore:cosmic_singularity", "64x gtceu:shirabon_dust")
        .outputFluids("gtceu:helium_plasma 1000")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(200)

    gtr.dissolution_treatment("gtlcore:rhenium_sulfuric_solution")
        .inputFluids("gtceu:molybdenum_flue 30000")
        .inputFluids("minecraft:water 2500")
        .outputFluids("gtceu:rhenium_sulfuric_solution 30000")
        .EUt(1920)
        .duration(3000)

    gtr.dissolution_treatment("gtlcore:rare_earth_hydroxides")
        .itemInputs("10x gtceu:rare_earth_dust", "30x gtceu:sodium_hydroxide_dust")
        .inputFluids("gtceu:phosphoric_acid 1000")
        .inputFluids("minecraft:water 9000")
        .outputFluids("gtceu:rare_earth_hydroxides 10000")
        .EUt(480)
        .duration(800)

    gtr.dissolution_treatment("gtlcore:bedrock_soot_solution")
        .inputFluids("gtceu:bedrock_smoke 10000")
        .inputFluids("gtceu:distilled_water 10000")
        .itemInputs("10x gtceu:naquadah_dust")
        .outputFluids("gtceu:bedrock_soot_solution 10000")
        .EUt(7680)
        .duration(4000)

    gtr.dissolution_treatment("gtlcore:actinium_radium_hydroxide_solution")
        .inputFluids("gtceu:actinium_radium_hydroxide_solution 10000")
        .inputFluids("gtceu:nitric_acid 120000")
        .outputFluids("gtceu:actinium_radium_nitrate_solution 130000")
        .EUt(GTValues.VA[GTValues.EV] * 2)
        .duration(2900)

    gtr.digestion_treatment("gtlcore:rare_earth_oxide_dust")
        .inputFluids("gtceu:rare_earth_chlorides 1000")
        .itemInputs("3x gtceu:sodium_oxide_dust")
        .outputFluids("gtceu:salt_water 1000")
        .itemOutputs("gtceu:rare_earth_oxide_dust")
        .EUt(1920)
        .duration(800)
        .blastFurnaceTemp(2580)

    gtr.digestion_treatment("gtlcore:rare_earth_metal_dust")
        .itemInputs("gtceu:rare_earth_oxide_dust")
        .inputFluids("gtceu:hydrogen 1000")
        .itemOutputs("gtceu:rare_earth_metal_dust")
        .outputFluids("minecraft:water 500")
        .EUt(7680)
        .duration(400)
        .blastFurnaceTemp(1760)

    gtr.digestion_treatment("gtlcore:naquadah_contain_rare_earth_dust")
        .itemInputs("gtceu:naquadah_contain_rare_earth_fluoride_dust")
        .inputFluids("gtceu:hydrogen 2000")
        .outputFluids("gtceu:hydrofluoric_acid 2000")
        .itemOutputs("gtceu:naquadah_contain_rare_earth_dust")
        .EUt(491520)
        .duration(800)
        .blastFurnaceTemp(6800)

    gtr.fluid_heater("gtlcore:bedrock_gas")
        .inputFluids("gtceu:clean_bedrock_solution 1000")
        .outputFluids("gtceu:bedrock_gas 1000")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(100)

    gtr.fluid_heater("gtlcore:azafullerene")
        .notConsumable("36x gtceu:tiny_rhenium_dust")
        .inputFluids("gtceu:aminated_fullerene 100")
        .outputFluids("gtceu:azafullerene 100")
        .EUt(480)
        .duration(120)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.fluid_heater("gtlcore:biohmediumsterilized")
        .inputFluids("gtceu:biomediumraw 100")
        .outputFluids("gtceu:biohmediumsterilized 100")
        .EUt(480)
        .duration(400)
        .cleanroom(CleanroomType.STERILE_CLEANROOM)

    gtr.fluid_heater("gtlcore:grade_2_purified_water")
        .inputFluids("gtceu:grade_1_purified_water 1000")
        .outputFluids("gtceu:grade_2_purified_water 900")
        .EUt(7680)
        .duration(200)

    gtr.fluid_heater("gtlcore:supercritical_carbon_dioxide")
        .inputFluids("gtceu:carbon_dioxide 1000")
        .outputFluids("gtceu:supercritical_carbon_dioxide 1000")
        .EUt(480)
        .duration(200)

    gtr.autoclave("gtlcore:spacetime_catalyst")
        .itemInputs("avaritia:infinity_catalyst")
        .inputFluids("gtceu:spacetime 1000")
        .itemOutputs("gtlcore:spacetime_catalyst")
        .EUt(4 * GTValues.VA[GTValues.MAX])
        .duration(1200)

    gtr.autoclave("gtlcore:periodically_poled_lithium_niobate_boule")
        .notConsumable("gtlcore:electron_source")
        .itemInputs("2x gtceu:lithium_niobate_nanoparticles_dust")
        .inputFluids("gtceu:xenon 1000")
        .itemOutputs("gtlcore:periodically_poled_lithium_niobate_boule")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(600)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.autoclave("gtlcore:contained_kerr_singularity")
        .notConsumable("gtceu:vibranium_nanoswarm")
        .itemInputs("gtlcore:contained_kerr_newmann_singularity")
        .inputFluids("gtceu:free_electron_gas 1000")
        .itemOutputs("gtlcore:contained_kerr_singularity")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(400)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.autoclave("gtlcore:unstable_star")
        .itemInputs("gtceu:orichalcum_nanoswarm")
        .itemInputs("gtceu:gravi_star")
        .inputFluids("gtceu:adamantine 288")
        .itemOutputs("gtceu:contaminable_orichalcum_nanoswarm")
        .itemOutputs("gtlcore:unstable_star")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(480)
        .addCondition(new GravityCondition(true))

    gtr.autoclave("gtlcore:nuclear_star")
        .itemInputs("gtceu:cosmic_neutronium_nanoswarm")
        .itemInputs("gtlcore:unstable_star")
        .itemOutputs("gtceu:contaminable_cosmic_neutronium_nanoswarm")
        .inputFluids("gtceu:infinity 288")
        .itemOutputs("gtlcore:nuclear_star")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(480)
        .addCondition(new GravityCondition(true))

    gtr.autoclave("gtlcore:super_mutated_living_solder")
        .inputFluids("gtceu:mutated_living_solder 10000")
        .itemInputs("64x gtlcore:space_essence", "64x gtlcore:draconium_dust")
        .outputFluids("gtceu:super_mutated_living_solder 10000")
        .itemOutputs("gtlcore:essence_block")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(2400)

    gtr.autoclave("gtlcore:draconium_dust")
        .notConsumable("64x gtceu:enderium_nanoswarm")
        .itemInputs("gtlcore:draconium_dust")
        .inputFluids("gtceu:dragon_element 1000")
        .itemOutputs("gtceu:draconium_dust")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(200)
        .cleanroom(GTLCleanroomType.LAW_CLEANROOM)

    gtr.autoclave("gtlcore:dry_graphene_gel_dust")
        .inputFluids("gtceu:acetone 1000")
        .itemInputs("gtceu:graphene_gel_suspension_dust")
        .itemOutputs("gtceu:dry_graphene_gel_dust")
        .EUt(480)
        .duration(260)

    gtr.autoclave("gtlcore:hassium_seed_crystal")
        .itemInputs("gtceu:tiny_hassium_dust")
        .inputFluids("gtceu:nitrogen 10000")
        .itemOutputs("gtlcore:hassium_seed_crystal")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(200)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.autoclave("gtlcore:imprinted_resonatic_circuit_board")
        .itemInputs("gtlcore:raw_imprinted_resonatic_circuit_board")
        .inputFluids("gtceu:soldering_alloy 432")
        .itemOutputs("gtlcore:imprinted_resonatic_circuit_board")
        .EUt(1920)
        .duration(300)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.brewery("gtlcore:dragon_blood")
        .itemInputs("gtlcore:dragon_cells")
        .inputFluids("gtceu:sterilized_growth_medium 1000")
        .outputFluids("gtceu:dragon_blood 1000")
        .EUt(480)
        .duration(6000)
        .cleanroom(GTLCleanroomType.LAW_CLEANROOM)

    gtr.brewery("gtlcore:grade_8_purified_water")
        .inputFluids("gtceu:grade_7_purified_water 1000")
        .notConsumable("gtceu:neutronium_dust")
        .outputFluids("gtceu:grade_8_purified_water 1000")
        .EUt(122880)
        .duration(200)

    gtr.fermenter("gtlcore:taranium_dust")
        .inputFluids("gtceu:taranium_rich_liquid_helium_4 1000")
        .itemInputs("gtceu:activated_carbon_dust")
        .itemOutputs("gtceu:taranium_dust")
        .EUt(2)
        .duration(200000)

    gtr.electromagnetic_separator("gtlcore:graphene_oxide_dust")
        .itemInputs("gtlcore:graphene_iron_plate")
        .itemOutputs("3x gtceu:graphene_oxide_dust", "enderio:powdered_iron")
        .EUt(30)
        .duration(120)

    gtr.electromagnetic_separator("gtlcore:purified_tengam_dust")
        .itemInputs("gtceu:clean_raw_tengam_dust")
        .itemOutputs("gtceu:purified_tengam_dust")
        .chancedOutput("gtceu:magnetic_neodymium_dust", 1000, 0)
        .chancedOutput("gtceu:magnetic_samarium_dust", 500, 0)
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(200)

    gtr.electromagnetic_separator("gtlcore:raw_tengam_dust")
        .itemInputs("gtceu:pure_jasper_dust")
        .itemOutputs("gtceu:jasper_dust")
        .chancedOutput("gtceu:raw_tengam_dust", 1000, 0)
        .chancedOutput("gtceu:raw_tengam_dust", 500, 0)
        .EUt(24)
        .duration(200)

    gtr.ore_washer("gtlcore:clean_inert_residues_dust")
        .itemInputs("gtceu:inert_residues_dust")
        .inputFluids("gtceu:aqua_regia 1000")
        .itemOutputs("gtceu:clean_inert_residues_dust")
        .EUt(480)
        .duration(400)

    gtr.ore_washer("gtlcore:clean_raw_tengam_dust")
        .itemInputs("gtceu:raw_tengam_dust")
        .inputFluids("gtceu:distilled_water 1000")
        .itemOutputs("gtceu:clean_raw_tengam_dust")
        .EUt(480)
        .duration(800)

    gtr.pyrolyse_oven("gtlcore:rawradox")
        .inputFluids("gtceu:xenoxene 1000")
        .itemInputs("16x kubejs:variation_wood")
        .outputFluids("gtceu:rawradox 1000")
        .itemOutputs("gtceu:ash_dust")
        .circuit(1)
        .EUt(GTValues.VA[GTValues.UV])
        .duration(900)

    gtr.pyrolyse_oven("gtlcore:rawradox1")
        .inputFluids("gtceu:enriched_xenoxene 1000")
        .itemInputs("16x kubejs:variation_wood")
        .outputFluids("gtceu:rawradox 10000")
        .itemOutputs("gtceu:ash_dust")
        .circuit(1)
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(600)

    gtr.cracker("gtlcore:crackedradox")
        .inputFluids("gtceu:superlightradox 100", "gtceu:silver_plasma 10")
        .outputFluids("gtceu:crackedradox 100")
        .circuit(1)
        .EUt(GTValues.VA[GTValues.UV])
        .duration(300)

    gtr.cracker("gtlcore:superlightradox")
        .inputFluids("gtceu:lightradox 100", "gtceu:silver_plasma 10")
        .outputFluids("gtceu:superlightradox 50")
        .circuit(1)
        .EUt(GTValues.VA[GTValues.UV])
        .duration(300)

    gtr.cracker("gtlcore:lightradox")
        .inputFluids("gtceu:heavyradox 100", "gtceu:silver_plasma 10")
        .outputFluids("gtceu:lightradox 20")
        .circuit(1)
        .EUt(GTValues.VA[GTValues.UV])
        .duration(200)

    gtr.cracker("gtlcore:fluorine_cracked_aquadah")
        .inputFluids("gtceu:naquadah_solution 1000", "gtceu:fluorine 1000")
        .outputFluids("gtceu:fluorine_cracked_aquadah 1000")
        .circuit(1)
        .EUt(GTValues.VA[GTValues.UV])
        .duration(120)

    gtr.cracker("gtlcore:radon_cracked_enriched_aquadah")
        .inputFluids("gtceu:enriched_naquadah_solution 1000", "gtceu:radon 1000")
        .outputFluids("gtceu:radon_cracked_enriched_aquadah 1000")
        .circuit(1)
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(160)

    gtr.cracker("gtlcore:steam_cracked_turpentine")
        .circuit(1)
        .inputFluids("gtceu:leached_turpentine 1000", "gtceu:steam 1000")
        .outputFluids("gtceu:steam_cracked_turpentine 1000")
        .EUt(GTValues.VA[GTValues.HV])
        .duration(200)

    gtr.electrolyzer("gtlcore:purified_xenoxene")
        .itemInputs("4x gtceu:xenoxene_crystal_dust")
        .inputFluids("gtceu:oil 1000")
        .outputFluids("gtceu:purified_xenoxene 1000", "minecraft:water 1000")
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(900)

    gtr.electrolyzer("gtlcore:sodium_chlorate_dust")
        .itemInputs("9x gtceu:sodium_hypochlorite_dust")
        .itemOutputs("5x gtceu:sodium_chlorate_dust", "4x gtceu:salt_dust")
        .EUt(120)
        .duration(210)

    gtr.electrolyzer("gtlcore:trinium_tetrafluoride_dust")
        .itemInputs("5x gtceu:trinium_tetrafluoride_dust")
        .inputFluids("gtceu:molten_calcium_salts 1000")
        .itemOutputs("1x gtceu:trinium_dust", "2x gtceu:calcium_dust")
        .outputFluids("gtceu:fluorine 6000")
        .EUt(GTValues.VA[GTValues.EV])
        .duration(200)

    gtr.electrolyzer("gtlcore:caesium_nitrate_dust")
        .itemInputs("5x gtceu:caesium_nitrate_dust")
        .itemOutputs("1x gtceu:caesium_dust")
        .outputFluids("gtceu:nitrogen 1000", "gtceu:oxygen 3000")
        .EUt(30)
        .duration(170)

    gtr.electrolyzer("gtlcore:radium_nitrate_dust")
        .itemInputs("9x gtceu:radium_nitrate_dust")
        .itemOutputs("1x gtceu:radium_dust")
        .outputFluids("gtceu:nitrogen 2000", "gtceu:oxygen 6000")
        .EUt(500)
        .duration(160)

    gtr.electrolyzer("gtlcore:actinium_nitrate_dust")
        .itemInputs("13x gtceu:actinium_nitrate_dust")
        .itemOutputs("1x gtceu:actinium_dust")
        .outputFluids("gtceu:nitrogen 3000", "gtceu:oxygen 9000")
        .EUt(500)
        .duration(210)

    gtr.electrolyzer("gtlcore:trimethylamine")
        .inputFluids("gtceu:trimethylamine 13000")
        .itemOutputs("3x gtceu:carbon_dust")
        .outputFluids("gtceu:hydrogen 9000", "gtceu:nitrogen 1000")
        .EUt(125)
        .duration(140)

    gtr.electrolyzer("gtlcore:lithium_aluminium_fluoride_dust")
        .itemInputs("6x gtceu:lithium_aluminium_fluoride_dust")
        .itemOutputs("4x gtceu:aluminium_trifluoride_dust", "2x gtceu:lithium_fluoride_dust")
        .EUt(120)
        .duration(250)

    gtr.electrolyzer("gtlcore:sodium_hexafluoroaluminate")
        .itemInputs("10x gtceu:alumina_dust")
        .inputFluids("gtceu:sodium_hexafluoroaluminate 1000")
        .itemOutputs("4x gtceu:aluminium_dust", "6x gtceu:sodium_fluoride_dust", "4x gtceu:aluminium_trifluoride_dust")
        .outputFluids("gtceu:oxygen 6000")
        .EUt(GTValues.VA[GTValues.MV])
        .duration(200)

    gtr.electrolyzer("gtlcore:trinium_compound_dust")
        .itemInputs("14x gtceu:trinium_compound_dust")
        .itemOutputs("3x gtceu:trinium_dust", "3x gtceu:actinium_dust", "4x gtceu:selenium_dust", "4x gtceu:astatine_dust")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(560)

    gtr.lathe("gtlcore:non_linear_optical_lens")
        .itemInputs("gtlcore:periodically_poled_lithium_niobate_boule")
        .itemOutputs("kubejs:non_linear_optical_lens")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(360)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.lathe("gtceu:magmatter_rod")
        .itemInputs("gtceu:magmatter_ingot")
        .itemOutputs("gtceu:magmatter_rod")
        .itemOutputs("gtceu:small_magmatter_dust")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(200)

    gtr.neutron_activator("gtlcore:hassium")
        .inputFluids("gtceu:liquid_metastable_hassium 1000")
        .outputFluids("gtceu:hassium 1000")
        .addData("ev_min", 340)
        .addData("ev_max", 380)
        .addData("evt", 480)
        .duration(200)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.neutron_activator("gtlcore:oganesson")
        .inputFluids("gtceu:metastable_oganesson 1000")
        .outputFluids("gtceu:oganesson 1000")
        .addData("ev_min", 720)
        .addData("ev_max", 800)
        .addData("evt", 1200)
        .duration(200)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.neutron_activator("gtlcore:quantanium")
        .inputFluids("gtceu:neon 10000")
        .itemInputs("4x gtceu:quantum_star", "8x gtceu:quantum_eye", "16x gtceu:mithril_dust", "16x gtceu:gadolinium_dust", "16x gtceu:exquisite_fluix_gem", "64x minecraft:netherite_scrap")
        .outputFluids("gtceu:quantanium 10000")
        .addData("ev_min", 1020)
        .addData("ev_max", 1200)
        .addData("evt", 3840)
        .duration(1200)

    gtr.neutron_activator("gtlcore:draconium_dust")
        .inputFluids("gtceu:uu_amplifier 1000")
        .notConsumable("gtceu:degenerate_rhenium_plate")
        .itemInputs("minecraft:dragon_egg")
        .itemOutputs("8x gtceu:ender_eye_dust", "4x enderio:powdered_ender_pearl")
        .chancedOutput("gtlcore:draconium_dust", 4000, 0)
        .addData("ev_min", 800)
        .addData("ev_max", 900)
        .addData("evt", 5760)
        .duration(800)

    gtr.heat_exchanger("gtceu:hot_sodium_potassium")
        .inputFluids("gtceu:hot_sodium_potassium 1")
        .inputFluids("minecraft:water 160")
        .outputFluids("gtceu:sodium_potassium 1")
        .outputFluids("gtceu:steam 25600")
        .duration(200)

    gtr.heat_exchanger("gtceu:supercritical_sodium_potassium")
        .inputFluids("gtceu:supercritical_sodium_potassium 1")
        .inputFluids("gtceu:distilled_water 80")
        .outputFluids("gtceu:sodium_potassium 1")
        .outputFluids("gtceu:supercritical_steam 800")
        .duration(200)
        .addData("eu", 12800)

    gtr.alloy_blast_smelter("gtlcore:carbon_disulfide")
        .circuit(8)
        .itemInputs("1x gtceu:carbon_dust", "2x gtceu:sulfur_dust")
        .outputFluids("gtceu:carbon_disulfide 1000")
        .EUt(GTValues.VA[GTValues.MV])
        .duration(350)
        .blastFurnaceTemp(1200)

    gtr.gravitation_shockburst("gtlcore:chain_command_block_core")
        .itemInputs("gtlcore:command_block_core", "64x minecraft:observer")
        .itemOutputs("gtlcore:chain_command_block_core")
        .EUt(65536 * GTValues.VA[GTValues.MAX])
        .duration(20)

    gtr.gravitation_shockburst("gtlcore:repeating_command_block_core")
        .itemInputs("gtlcore:chain_command_block_core", "64x minecraft:calibrated_sculk_sensor")
        .itemOutputs("gtlcore:repeating_command_block_core")
        .EUt(65536 * GTValues.VA[GTValues.MAX])
        .duration(20)

    gtr.gravitation_shockburst("gtlcore:command_block_broken")
        .itemInputs("minecraft:command_block", "gtceu:magneto_hydro_dynamically_con_strained_star_matter_dust")
        .itemOutputs("gtlcore:command_block_broken")
        .EUt(65536 * GTValues.VA[GTValues.MAX])
        .duration(20)

    gtr.gravitation_shockburst("gtlcore:chain_command_block_broken")
        .itemInputs("minecraft:chain_command_block", "gtceu:magneto_hydro_dynamically_con_strained_star_matter_dust")
        .itemOutputs("gtlcore:chain_command_block_broken")
        .EUt(65536 * GTValues.VA[GTValues.MAX])
        .duration(20)

    gtr.petrochemical_plant("gtlcore:petrochemical_plant_1")
        .inputFluids("gtceu:oil 1000", "gtceu:steam 1000")
        .outputFluids("gtceu:toluene 60",
            "gtceu:benzene 180",
            "gtceu:octane 60",
            "gtceu:butane 80",
            "gtceu:butene 100",
            "gtceu:butadiene 90",
            "gtceu:propane 80",
            "gtceu:propene 400",
            "gtceu:ethane 80",
            "gtceu:ethylene 400",
            "gtceu:methane 400",
            "gtceu:helium 20")
        .EUt(1920)
        .duration(200)

    gtr.petrochemical_plant("gtlcore:petrochemical_plant_2")
        .inputFluids("gtceu:oil_medium 1000", "gtceu:steam 1000")
        .outputFluids("gtceu:toluene 40",
            "gtceu:benzene 200",
            "gtceu:octane 30",
            "gtceu:butane 70",
            "gtceu:butene 100",
            "gtceu:butadiene 100",
            "gtceu:propane 30",
            "gtceu:propene 600",
            "gtceu:ethane 130",
            "gtceu:ethylene 1000",
            "gtceu:methane 1000",
            "gtceu:helium 10")
        .EUt(1920)
        .duration(200)

    gtr.petrochemical_plant("gtlcore:petrochemical_plant_3")
        .inputFluids("gtceu:oil_heavy 1000", "gtceu:steam 1000")
        .outputFluids("gtceu:toluene 240",
            "gtceu:benzene 1200",
            "gtceu:octane 20",
            "gtceu:butane 60",
            "gtceu:butene 240",
            "gtceu:butadiene 150",
            "gtceu:propane 30",
            "gtceu:propene 300",
            "gtceu:ethane 45",
            "gtceu:ethylene 450",
            "gtceu:methane 450",
            "gtceu:helium 10")
        .EUt(1920)
        .duration(200)

    gtr.petrochemical_plant("gtlcore:petrochemical_plant_4")
        .inputFluids("gtceu:oil_light 1000", "gtceu:steam 1000")
        .outputFluids("gtceu:toluene 20",
            "gtceu:benzene 100",
            "gtceu:octane 20",
            "gtceu:butane 120",
            "gtceu:butene 80",
            "gtceu:butadiene 80",
            "gtceu:propane 140",
            "gtceu:propene 90",
            "gtceu:ethane 200",
            "gtceu:ethylene 250",
            "gtceu:methane 2000",
            "gtceu:helium 40")
        .EUt(1920)
        .duration(200)

    gtr.aggregation_device("gtlcore:draconic_core")
        .notConsumable("gtlcore:stabilizer_core")
        .itemInputs("gtlcore:draconium_dust", "gtceu:zpm_field_generator", "gtceu:lapotronic_energy_orb", "gtceu:mithril_block", "gtceu:hexanitrohexaaxaisowurtzitane_dust", "gtceu:uv_field_generator", "minecraft:nether_star", "gtceu:enderium_block")
        .itemOutputs("2x gtlcore:draconic_core")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(400)

    gtr.aggregation_device("gtlcore:wyvern_core")
        .notConsumable("gtlcore:stabilizer_core")
        .itemInputs("gtlcore:draconium_dust", "gtceu:uhv_field_generator", "gtceu:quantum_eye", "gtceu:adamantine_block", "gtlcore:draconic_core", "gtceu:uev_field_generator", "gtceu:quantum_star", "gtceu:orichalcum_block")
        .itemOutputs("2x gtlcore:wyvern_core")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(400)

    gtr.aggregation_device("gtlcore:awakened_core")
        .notConsumable("gtlcore:dragon_stabilizer_core")
        .itemInputs("gtceu:draconium_dust", "gtceu:uiv_field_generator", "gtlcore:dragon_heart", "gtceu:vibranium_block", "gtlcore:wyvern_core", "gtceu:uxv_field_generator", "gtceu:gravi_star", "gtceu:taranium_block")
        .itemOutputs("2x gtlcore:awakened_core")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(400)

    gtr.aggregation_device("gtlcore:chaotic_core")
        .notConsumable("gtlcore:dragon_stabilizer_core")
        .itemInputs("gtceu:draconium_nanoswarm", "gtceu:opv_field_generator", "gtlcore:chaos_shard", "gtceu:legendarium_block", "gtlcore:awakened_core", "gtlcore:max_field_generator", "gtlcore:unstable_star", "gtceu:awakened_draconium_block")
        .itemOutputs("2x gtlcore:chaotic_core")
        .EUt(GTValues.VA[GTValues.OpV])
        .duration(400)

    gtr.evaporation("gtlcore:salt_water")
        .inputFluids("minecraft:water 50000")
        .outputFluids("gtceu:salt_water 1000")
        .EUt(30)
        .duration(600)

    gtr.evaporation("gtlcore:grade_7_purified_water")
        .inputFluids("gtceu:grade_6_purified_water 1000000")
        .outputFluids("gtceu:grade_7_purified_water 900000")
        .outputFluids("gtceu:grade_6_purified_water 50000")
        .outputFluids("gtceu:grade_5_purified_water 20000")
        .outputFluids("gtceu:acetic_acid 20")
        .outputFluids("gtceu:ethanol 40")
        .EUt(524288)
        .duration(4000)

    gtr.evaporation("gtlcore:grade_12_purified_water")
        .inputFluids("gtceu:grade_11_purified_water 10000000")
        .itemOutputs("gtceu:tiny_neutronium_dust")
        .outputFluids("gtceu:grade_12_purified_water 9999000")
        .outputFluids("gtceu:helium_3 100")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(2000)

    gtr.extruder("gtlcore:special_ceramics")
        .itemInputs("2x gtceu:special_ceramics_dust")
        .notConsumable("gtceu:plate_extruder_mold")
        .itemOutputs("gtlcore:special_ceramics")
        .EUt(GTValues.VA[GTValues.HV])
        .duration(20)
})