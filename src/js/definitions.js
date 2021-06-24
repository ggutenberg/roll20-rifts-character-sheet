const WP = {
  archery: [
    { strike: 1, parry: 1, rof: 2 },
    { strike: 1, disarm: 1, rof: 1 },
    {},
    { strike: 1, rof: 1 },
    { disarm: 1, rof: 1 },
    { strike: 1 },
    {},
    { strike: 1, rof: 1 },
    {},
    { strike: 1, disarm: 1, rof: 1 },
    {},
    { strike: 1, rof: 1 },
    {},
    { strike: 1, rof: 1 },
    { disarm: 1 },
  ],
  axe: [
    {},
    { strike: 1, parry: 1 },
    {},
    {},
    { strike: 1, parry: 1, throw: 1 },
    {},
    {},
    { strike: 1, parry: 1, throw: 1 },
    {},
    {},
    {},
    { strike: 1, parry: 1, throw: 1 },
    {},
    {},
    { strike: 1, parry: 1 },
  ],
  blunt: [
    { strike: 1, parry: 1 },
    {},
    { strike: 1, parry: 1 },
    {},
    { throw: 1 },
    { strike: 1, parry: 1 },
    {},
    {},
    { strike: 1, parry: 1 },
    { throw: 1 },
    {},
    { strike: 1, parry: 1 },
    {},
    {},
    { throw: 1 },
  ],
  chain: [
    { strike: 1 },
    {},
    { strike: 1 },
    { parry: 1 },
    {},
    {},
    { strike: 1 },
    { parry: 1 },
    {},
    { strike: 1 },
    {},
    { parry: 1 },
    { strike: 1 },
    {},
    {},
  ],
  forked: [
    { strike: 1, parry: 1, entangle: 1 },
    {},
    { strike: 1, parry: 1, entangle: 1 },
    { throw: 1 },
    { strike: 1, entangle: 1 },
    { parry: 1 },
    {},
    { strike: 1, entangle: 1 },
    {},
    { parry: 1, throw: 1 },
    { strike: 1, entangle: 1 },
    {},
    { strike: 1, parry: 1, entangle: 1 },
    {},
    { throw: 1 },
  ],
  knife: [
    { parry: 1, throw: 1 },
    { strike: 1 },
    { parry: 1, throw: 1 },
    { strike: 1 },
    {},
    { parry: 1, throw: 1 },
    { strike: 1 },
    { throw: 1 },
    { parry: 1 },
    { strike: 1, throw: 1 },
    {},
    { parry: 1 },
    { strike: 1, throw: 1 },
    {},
    {},
  ],
  "grappling hook": [
    {},
    {},
    { strike: 1, entangle: 1 },
    {},
    {},
    { strike: 1, entangle: 1 },
    {},
    {},
    { strike: 1, entangle: 1 },
    {},
    {},
    { strike: 1, entangle: 1 },
    {},
    {},
    {},
  ],
  "pole arm": [
    { strike: 1, parry: 1 },
    {},
    { strike: 1, parry: 1, throw: 1 },
    {},
    {},
    { strike: 1, parry: 1 },
    {},
    { throw: 1 },
    { strike: 1, parry: 1 },
    {},
    {},
    { strike: 1, parry: 1, throw: 1 },
    {},
    {},
    {},
  ],
  rope: [
    { strike: 1, entangle: 1, disarm: 1 },
    {},
    {},
    { strike: 1 },
    {},
    {},
    {},
    { strike: 1 },
    {},
    {},
    {},
    { strike: 1 },
    {},
    {},
    { strike: 1 },
  ],
  shield: [
    { parry: 1 },
    {},
    { parry: 1 },
    { strike: 1 },
    {},
    {},
    { parry: 1 },
    { strike: 1 },
    {},
    { parry: 1 },
    {},
    { strike: 1 },
    { parry: 1 },
    {},
    {},
  ],
  spear: [
    { strike: 1, parry: 1 },
    {},
    { strike: 1, parry: 1, throw: 1 },
    {},
    {},
    { strike: 1, parry: 1, throw: 1 },
    {},
    {},
    { strike: 1, parry: 1 },
    { throw: 1 },
    {},
    { strike: 1, parry: 1 },
    {},
    { throw: 1 },
    {},
  ],
  staff: [
    { strike: 1 },
    { parry: 1 },
    { strike: 1 },
    {},
    { parry: 1, throw: 1 },
    {},
    { strike: 1 },
    { parry: 1 },
    {},
    { strike: 1, throw: 1 },
    { parry: 1 },
    {},
    { strike: 1 },
    { parry: 1 },
    { throw: 1 },
  ],
  sword: [
    { strike: 1 },
    { parry: 1 },
    { strike: 1 },
    { parry: 1, throw: 1 },
    {},
    { strike: 1 },
    { parry: 1 },
    { throw: 1 },
    { strike: 1 },
    { parry: 1 },
    {},
    { strike: 1, throw: 1 },
    { parry: 1 },
    {},
    { strike: 1 },
  ],
  targeting: [
    { strike: 1 },
    { damage: 1 },
    { strike: 1 },
    {},
    {},
    {},
    { strike: 1 },
    { damage: 1 },
    {},
    { strike: 1 },
    {},
    {},
    {},
    {},
    {},
  ],
  whip: [
    {},
    { strike: 1, entangle: 1, disarm: 1, damage: 1 },
    {},
    { strike: 1, entangle: 1, disarm: 1, damage: 1 },
    {},
    {},
    { strike: 1, entangle: 1, disarm: 1 },
    { damage: 1 },
    {},
    { strike: 1, entangle: 1, disarm: 1 },
    {},
    { damage: 1 },
    { strike: 1, entangle: 1, disarm: 1 },
    {},
    {},
  ],
  handguns: [
    {},
    { strike_range_single: 1 },
    {},
    { strike_range_single: 1, strike_range_burst: 1 },
    {},
    { strike_range_single: 1 },
    {},
    { strike_range_single: 1, strike_range_burst: 1 },
    {},
    { strike_range_single: 1 },
    {},
    { strike_range_single: 1, strike_range_burst: 1 },
    {},
    { strike_range_single: 1 },
    {},
  ],
  rifles: [
    { strike_range_single: 1 },
    {},
    { strike_range_single: 1, strike_range_burst: 1 },
    {},
    { strike_range_single: 1 },
    {},
    { strike_range_single: 1, strike_range_burst: 1 },
    {},
    { strike_range_single: 1 },
    {},
    { strike_range_single: 1, strike_range_burst: 1 },
    {},
    { strike_range_single: 1 },
    {},
    {},
  ],
  "energy heavy": [
    {},
    { strike_range_single: 1 },
    {},
    { strike_range_single: 1, strike_range_burst: 1 },
    {},
    {},
    { strike_range_single: 1 },
    {},
    {},
    { strike_range_single: 1, strike_range_burst: 1 },
    {},
    {},
    { strike_range_single: 1 },
    {},
    {},
  ],
  "energy pistol": [
    { strike_range_single: 1 },
    {},
    { strike_range_single: 1, strike_range_burst: 1 },
    {},
    { strike_range_single: 1 },
    {},
    { strike_range_single: 1, strike_range_burst: 1 },
    {},
    { strike_range_single: 1 },
    {},
    { strike_range_single: 1, strike_range_burst: 1 },
    {},
    { strike_range_single: 1 },
    {},
    { strike_range_single: 1, strike_range_burst: 1 },
  ],
  "energy rifle": [
    {},
    { strike_range_single: 1 },
    {},
    { strike_range_single: 1, strike_range_burst: 1 },
    {},
    { strike_range_single: 1 },
    {},
    { strike_range_single: 1, strike_range_burst: 1 },
    {},
    { strike_range_single: 1 },
    {},
    { strike_range_single: 1, strike_range_burst: 1 },
    {},
    { strike_range_single: 1 },
    {},
  ],
  heavy: [
    { strike_range_single: 1 },
    {},
    { strike_range_single: 1, strike_range_burst: 1 },
    {},
    {},
    { strike_range_single: 1 },
    {},
    {},
    {},
    { strike_range_single: 1, strike_range_burst: 1 },
    {},
    {},
    {},
    { strike_range_single: 1 },
    {},
  ],
  speargun: [
    {},
    { strike_range_single: 1 },
    {},
    { strike_range_single: 1, strike_range_burst: 1 },
    {},
    {},
    { strike_range_single: 1 },
    {},
    {},
    { strike_range_single: 1, strike_range_burst: 1 },
    {},
    {},
    {},
    {},
    { strike_range_single: 1 },
  ],
  shotgun: [
    { strike_range_single: 1 },
    {},
    { strike_range_single: 1, strike_range_burst: 1 },
    {},
    {},
    { strike_range_single: 1 },
    {},
    {},
    {},
    { strike_range_single: 1, strike_range_burst: 1 },
    {},
    {},
    {},
    { strike_range_single: 1 },
    {},
  ],
  submachinegun: [
    { strike_range_single: 1 },
    {},
    { strike_range_single: 1, strike_range_burst: 1 },
    {},
    {},
    { strike_range_single: 1 },
    {},
    {},
    { strike_range_single: 1, strike_range_burst: 1 },
    {},
    {},
    { strike_range_single: 1 },
    {},
    {},
    { strike_range_single: 1, strike_range_burst: 1 },
  ],
  flamethrower: [
    {},
    { strike_range_single: 1 },
    {},
    {},
    { strike_range_single: 1, strike_range_burst: 1 },
    {},
    {},
    {},
    {},
    { strike_range_single: 1 },
    {},
    {},
    {},
    {},
    { strike_range_single: 1, strike_range_burst: 1 },
  ],
};

const WP_KEYS = {
  wp: [
    "name",
    "level",
    "strike",
    "parry",
    "disarm",
    "rof",
    "throw",
    "entangle",
  ],
  wpmodern: [
    "name",
    "level",
    "strike_range_single",
    "disarm",
    "strike_range_burst",
  ],
};

const COMBAT_KEYS = [
  "selection_id",
  "name",
  "level",
  "attacks",
  "sdc",
  "mdc",
  "initiative",
  "strike",
  "parry",
  "dodge",
  "throw",
  "disarm",
  "entangle",
  "pull",
  "roll",
  "damage",
  "dodge_flight",
  "dodge_auto",
  "dodge_teleport",
  "dodge_motion",
  "strike_range",
  "strike_range_single",
  "strike_range_burst",
  "critical",
  "knockout",
  "deathblow",
  "flipthrow",
];
const SAVE_KEYS_ATTRIBUTE_BONUSES = {
  me_bonus: ["psionics", "insanity"],
  pe_bonus: [
    "magic",
    "lethalpoison",
    "nonlethalpoison",
    "disease",
    "pain",
    "drugs",
  ],
  pe_coma_bonus: ["comadeath"],
  perception: ["perceptioncheck"],
  none: ["horrorfactor", "mindcontrol", "illusions", "possession", "curses"],
};
const SAVE_KEYS = Object.values(SAVE_KEYS_ATTRIBUTE_BONUSES).reduce(
  (acc, cur) => acc.concat(cur),
  []
);
const COMBAT_SAVE_KEYS = COMBAT_KEYS.concat(SAVE_KEYS);
const SKILL_KEYS = ["name", "base", "bonus", "perlevel", "level", "total"];

const MAGIC_KEYS = [
  "name",
  "school",
  "spell_level",
  "range",
  "damage",
  "duration",
  "percentage",
  "ppe",
  "range_starting",
  "range_per_level",
  "range_units",
  "damage_starting",
  "damage_per_level",
  "damage_units",
  "duration_starting",
  "duration_per_level",
  "duration_units",
  "percentage_starting",
  "percentage_per_level",
  "description",
];

const PSIONICS_KEYS = [
  "name",
  "range",
  "damage",
  "duration",
  "percentage",
  "isp",
  "range_starting",
  "range_per_level",
  "range_units",
  "damage_starting",
  "damage_per_level",
  "damage_units",
  "duration_starting",
  "duration_per_level",
  "duration_units",
  "percentage_starting",
  "percentage_per_level",
  "description",
];

const CORE_KEYS = [
  "character_name",
  "truename_name",
  "character_race",
  "occ",
  "ps_type",
  "character_level",
  "experience",
  "alignment",
  "character_age",
  "character_gender",
  "character_height",
  "character_weight",
  "character_familyorigin",
  "character_environment",
  "character_languages",
  "character_insanity",
  "character_disposition",
  "iq",
  "iq_bonus",
  "perception_bonus",
  "me",
  "me_bonus",
  "ma",
  "ma_bonus",
  "ps",
  "ps_bonus",
  "pp",
  "pp_bonus",
  "pe",
  "pe_bonus",
  "pe_coma_bonus",
  "pb",
  "pb_bonus",
  "spd",
  "trust_intimidate",
  "charm_impress",
  "restrained_punch",
  "restrained_punch_unit",
  "punch",
  "punch_unit",
  "power_punch",
  "power_punch_unit",
  "kick",
  "kick_unit",
  "leap_kick",
  "leap_kick_unit",
  "lift",
  "carry",
  "throw",
  "carry_max",
  "carry_running",
  "hold_max",
  "character_hp",
  "character_sdc",
  "character_ar",
  "character_mdc",
  "character_ppe",
  "character_isp",
  "character_hf",
  "perception",
  "run_mph",
  "run_ft_melee",
  "run_ft_attack",
  "run_cruising",
  "run_at_max",
  "leapup",
  "leapout",
  "equipment",
];

const MOVEMENT_KEYS = ["name", "mph", "ft_melee", "cruising", "dur_at_max"];

const EQUIPMENT_KEYS = ["equipment"];

const SECTIONS = {
  wp: WP_KEYS.wp,
  wpmodern: WP_KEYS.wpmodern,
  skills: SKILL_KEYS,
  combat: COMBAT_SAVE_KEYS,
  magic: MAGIC_KEYS,
  psionics: PSIONICS_KEYS,
  movement: MOVEMENT_KEYS,
  // equipment: EQUIPMENT_KEYS,
};
