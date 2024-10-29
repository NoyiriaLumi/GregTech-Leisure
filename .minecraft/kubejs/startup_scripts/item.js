// priority: 99
ItemEvents.armorTierRegistry(event => {
    event.add("magneto_hydro_dynamically_con_strained_star_matter", tier => {
        tier.durabilityMultiplier = -1
        tier.slotProtections = [0, 0, 0, 0]
        tier.enchantmentValue = 10
        tier.equipSound = "minecraft:item.armor.equip_iron"
        tier.repairIngredient = "#forge:ingots/magneto_hydro_dynamically_con_strained_star_matter"
        tier.toughness = 0
        tier.knockbackResistance = 10
    })
    event.add("fermium", tier => {
        tier.durabilityMultiplier = -1
        tier.slotProtections = [16, 24, 22, 14]
        tier.enchantmentValue = 10
        tier.equipSound = "minecraft:item.armor.equip_iron"
        tier.toughness = 10
        tier.knockbackResistance = 1
    })
    event.add("space_fermium", tier => {
        tier.durabilityMultiplier = -1
        tier.slotProtections = [16, 24, 22, 14]
        tier.enchantmentValue = 14
        tier.equipSound = "minecraft:item.armor.equip_iron"
        tier.toughness = 10
        tier.knockbackResistance = 2
    })
})
StartupEvents.registry("item", event => {
    event.create("magneto_hydro_dynamically_con_strained_star_matter_helmet", "helmet")
        .tier("magneto_hydro_dynamically_con_strained_star_matter")
        .tag("gtceu:ppe_armor")
    event.create("magneto_hydro_dynamically_con_strained_star_matter_chestplate", "chestplate")
        .tier("magneto_hydro_dynamically_con_strained_star_matter")
        .tag("gtceu:ppe_armor")
    event.create("magneto_hydro_dynamically_con_strained_star_matter_leggings", "leggings")
        .tier("magneto_hydro_dynamically_con_strained_star_matter")
        .tag("gtceu:ppe_armor")
    event.create("magneto_hydro_dynamically_con_strained_star_matter_boots", "boots")
        .tier("magneto_hydro_dynamically_con_strained_star_matter")
        .tag("gtceu:ppe_armor")
    event.create("fermium_helmet", "helmet")
        .tier("fermium")
    event.create("fermium_chestplate", "chestplate")
        .tier("fermium")
    event.create("fermium_leggings", "leggings")
        .tier("fermium")
    event.create("fermium_boots", "boots")
        .tier("fermium")
    event.create("space_fermium_helmet", "helmet")
        .tier("space_fermium")
    event.create("space_fermium_chestplate", "chestplate")
        .tier("space_fermium")
    event.create("space_fermium_leggings", "leggings")
        .tier("space_fermium")
    event.create("space_fermium_boots", "boots")
        .tier("space_fermium")

    event.create("ingot_field_shape")
        .texture("gtceu:item/ingot_casting_mold")
        .unstackable()
    event.create("ball_field_shape")
        .texture("gtceu:item/ball_casting_mold")
        .unstackable()
    event.create("overworld_data")
        .texture("gtceu:item/data_stick")
    event.create("nether_data")
        .texture("gtceu:item/data_stick")
    event.create("end_data")
        .texture("gtceu:item/data_stick")
    event.create("non_linear_optical_lens")
        .texture("gtceu:item/yellow_glass_lens")
    event.create("command_wand")
        .unstackable()
    event.create("grindball_soapstone")
        .unstackable()
        .maxDamage(50)
    event.create("grindball_aluminium")
        .unstackable()
        .maxDamage(100)
})
ItemEvents.modification(event => {
    event.modify("gtceu:raw_coal", modification => {
        modification.setBurnTime(1600)
    })
    event.modify("minecraft:diamond", modification => {
        modification.setBurnTime(1280000)
    })
    event.modify("minecraft:diamond_block", modification => {
        modification.setBurnTime(12800000)
    })
    event.modify("kubejs:diamond_compressed_block", modification => {
        modification.setBurnTime(120000000)
    })

})