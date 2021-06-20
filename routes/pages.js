const { Router } = require("express");
const {
  characters,
  weapons,
  lands,
  magic_items,
} = require("../controller/colletions");
const router = Router();

//PAGES

router.get("/", (req, res) => {
  res.render("main.ejs", {
    title: "Adventure Time API",
  });
});

router.get("/characters", (req, res) => {
  res.render("characters.ejs", {
    title: "Characters",
  });
});

router.get("/weapons", (req, res) => {
  res.render("weapons.ejs", { title: "Weapons" });
});

router.get("/lands", (req, res) => {
  res.render("lands.ejs", { title: "Lands" });
});

router.get("/magic_items", (req, res) => {
  res.render("artifacts.ejs", { title: "Magic Items" });
});

//API - get all
router.get("/api/characters", characters.get_all);
router.get("/api/weapons", weapons.get_all);
router.get("/api/lands", lands.get_all);
router.get("/api/magic_items", magic_items.get_all);

// Random
router.get("/api/characters/random", characters.get_random);
router.get("/api/weapons/random", weapons.get_random);
router.get("/api/lands/random", lands.get_random);
router.get("/api/magic_items/random", magic_items.get_random);

// by id
router.get("/api/characters/:id", characters.get_by_id);
router.get("/api/weapons/:id", weapons.get_by_id);
router.get("/api/lands/:id", lands.get_by_id);
router.get("/api/magic_items/:id", magic_items.get_by_id);

module.exports = router;
