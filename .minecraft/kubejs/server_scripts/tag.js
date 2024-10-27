//priority: 100
const tiers = [["ulv", 0], ["lv", 1], ["mv", 2], ["hv", 3], ["ev", 4], ["iv", 5], ["luv", 6], ["zpm", 7], ["uv", 8], ["uhv", 9], ["uev", 10], ["uiv", 11], ["uxv", 12], ["opv", 13], ["max", 14]]
ServerEvents.tags("item", event => {
    const items = [
        "appflux:redstone_crystal",
        "ad_astra:iron_plate",
        "ad_astra:iron_rod",
        "ad_astra:steel_ingot",
        "ad_astra:steel_nugget",
        "ad_astra:steel_plate",
        "ad_astra:steel_rod",
        "ad_astra:steel_block"
    ]
    items.forEach((item) => {
        event.removeAllTagsFrom(item)
    })

    //space_suit
    const space_suit_items = ["ad_astra:netherite_space_suit_items",
        "ad_astra:freeze_resistant_armor",
        "ad_astra:heat_resistant_armor",
        "ad_astra:space_suit_items"]
    space_suit_items.forEach(ssitem => {
        event.add(ssitem, ["gtceu:quarktech_chestplate",
            "gtceu:quarktech_leggings",
            "gtceu:quarktech_boots",
            "gtceu:advanced_quarktech_chestplate",
            "gtceu:quarktech_helmet",
            "avaritia:infinity_helmet",
            "avaritia:infinity_chestplate",
            "avaritia:infinity_pants",
            "avaritia:infinity_boots",
            "kubejs:space_fermium_helmet",
            "kubejs:space_fermium_chestplate",
            "kubejs:space_fermium_leggings",
            "kubejs:space_fermium_boots",
            "kubejs:magnetohydrodynamicallyconstrainedstarmatter_helmet",
            "kubejs:magnetohydrodynamicallyconstrainedstarmatter_chestplate",
            "kubejs:magnetohydrodynamicallyconstrainedstarmatter_leggings",
            "kubejs:magnetohydrodynamicallyconstrainedstarmatter_boots"])
    })
})

ServerEvents.tags("fluid", event => {
    event.removeAll("ad_astra:tier_1_rocket_fuel")
    event.removeAll("ad_astra:tier_2_rocket_fuel")
    event.removeAll("ad_astra:tier_3_rocket_fuel")
    event.removeAll("ad_astra:tier_4_rocket_fuel")
    event.removeAll("ad_astra_rocketed:tier_5_rocket_fuel")
    event.removeAll("ad_astra_rocketed:tier_6_rocket_fuel")
    event.removeAll("ad_astra_rocketed:tier_7_rocket_fuel")
    event.remove("forge:oxygen", "ad_astra:oxygen")
    event.remove("forge:hydrogen", "ad_astra:hydrogen")
    event.remove("forge:oil", "ad_astra:oil")
    event.add("ad_astra:tier_1_rocket_fuel", "gtceu:rocket_fuel")
    event.add("ad_astra:tier_2_rocket_fuel", "gtceu:rocket_fuel_rp_1")
    event.add("ad_astra:tier_3_rocket_fuel", "gtceu:dense_hydrazine_fuel_mixture")
    event.add("ad_astra:tier_4_rocket_fuel", "gtceu:rocket_fuel_cn3h7o3")
    event.add("ad_astra_rocketed:tier_5_rocket_fuel", "gtceu:rocket_fuel_h8n4c2o4")
    event.add("ad_astra_rocketed:tier_6_rocket_fuel", "ad_astra:cryo_fuel")
    event.add("ad_astra_rocketed:tier_7_rocket_fuel", "gtceu:stellar_energy_rocket_fuel")
})

PlayerEvents.loggedIn(event => {
    event.server.runCommand("say 当前版本是开发测试版本，不能保证内容的稳定性和完整性。如果您遇到任何问题或有任何建议，请访问GitHub提供反馈。")
    event.server.runCommand("say The current version is a development test version, which does not guarantee stability and completeness of content. If you encounter any issues or have suggestions, please go to GitHub to provide feedback.")
})

ServerEvents.entityLootTables(event => {
    event.addEntity("ad_astra:glacian_ram", l => {
        l.addPool(p => {
            p.addItem("gtlcore:glacio_spirit").weight(1)
            p.addItem("ad_astra:ice_shard").weight(999)
        })
    })
})