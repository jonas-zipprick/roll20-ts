
export interface State {
    [key: string]: any;
}

export declare var state: State;

export declare function Campaign(): Campaign;

/**
 * @param type The type of Roll20 object to create
 * @param attributes The initial values to use for the Roll20 object's properties
 */
export declare function createObj(type: ObjTypes.Graphic|ObjTypes.Text|ObjTypes.Path|ObjTypes.Character|ObjTypes.Ability|
                           ObjTypes.Attribute|ObjTypes.Handout|ObjTypes.RollableTable|ObjTypes.TableItem|ObjTypes.Macro,
                           attributes: object): Roll20Object;

/**
 * @param callback A predicate function to test all Roll20 objects against.
 */
export declare function filterObjs(callback: (obj: Roll20Object) => boolean): Roll20Object[];

/**
 * @param attributes A collection of key:value pairs to match with Roll20 objects in the campaign.
 * @param options If options.caseInsensitive is true, string comparisons between Roll20 objects and attributes will be
 * case-insensitive.
 */
export declare function findObjs(attributes: object, options?: { caseInsensitive: boolean }): Roll20Object[];

export declare function getAllObjs(): Roll20Object[];

/**
 * @param character_id The id of the character Roll20 object that is the parent of the attribute Roll20 object you want
 * the value of.
 * @param attribute_name The name of the attribute Roll20 object you want the value of.
 * @param value_type Either "current" or "max" (defaults to "current" if omitted).
 */
export declare function getAttrByName(character_id: string, attribute_name: string, value_type?: "current"|"max"): string;

/**
 * @param type The type of Roll20 object to get.
 * @param id The unique id for the Roll20 object to get.
 */
export declare function getObj(type: ObjTypes, id: string): Roll20Object;

/**
 * @param message The message to post to the API console. The message parameter will be transformed into a String with
 * JSON.stringify.
 */
export declare function log(message: any): void;

export declare function on(event: "chat:message", callback: (msg: Message) => void): void;

export declare function on(event: string, callback: (obj?: any, prev?: any) => void): void;

/**
 * @param callback The function that will be called when the current 'stack' of Sheet Worker Scripts completes.
 */
export declare function onSheetWorkerCompleted(callback: () => void): void;

/**
 * @param player_id The id of the player Roll20 object to check.
 */
export declare function playerIsGM(player_id: string): boolean;

/**
 * Starts playing the playlist
 * @param playerlist_id The id of the playlist to start playing
 */
export declare function playJukeboxPlaylist(playerlist_id: string): void;

/**
 * A random integer between 1 (inclusive) and max (inclusive). This function has better distribution than Math.random(),
 * and is recommended over it. This function doesn't make use of the Quantum Roll feature used by the dice engine, but
 * it does use the same pseudorandom algorithm that the dice engine will fall back on if Quantum Roll is unavailable.
 * @param max The maximum number to return, inclusive
 */
export declare function randomInteger(max: number): number;

/**
 * Sends a chat messages asynchronously
 * @param speakingas The name to attach to the message being sent. If speakingAs is in the format player|player_id or
 * character|character_id, the message will be sent as that player or character. Otherwise, the message will use the
 * given name as though a GM had used the /as command
 * @param message The message to send to the chat
 * @param callback If callback is specified, the result of the chat message will be passed to it instead of appearing in
 * the chat. The parameter of the callback method is an array of message objects
 * @param options If options.noarchive is true, the message will not be added to the chat archive. If options.use3d is
 * true, dice rolls in the message will use the 3D dice feature. Options are not applicable if callback is specified
 */
export declare function sendChat(speakingas: string, message: string, callback?: ((msg: Message[]) => void) | null,
                          options?: { noarchive?: boolean, use3d?: boolean }): void;

/**
 *
 * At this time, only GMs will have their views centered if moveAll is true
 * @param left The x-coordinate to place the ping at
 * @param top The y-coordinate to place the ping at
 * @param page_id The id of the page Roll20 object to place the ping on
 * @param player_id The ping will use the specified player's color. If player_id is omitted, the ping will be yellow
 * @param moveall If moveAll is true, all of the players on the appropriate page will have their views centered on the
 * ping
 */
export declare function sendPing(left: number, top: number, page_id: string, player_id?: string, moveall?: boolean): void;

/**
 *
 * @param left The x-coordinate to place the particle emitter
 * @param top The y-coordinate to place the particle emitter
 * @param type The type of particle emitter to place
 * @param page_id The id of the page Roll20 object to place the particle emitter on. If omitted,
 * Campaign().get('playerpageid') will be used instead
 */
export declare function spawnFx(left: number, top: number, type: FX | string, page_id?: string | undefined): void;

/**
 *
 * @param start The starting point for the particle emitter
 * @param end The ending point for the particle emitter
 * @param type The type of particle emitter to place
 * @param page_id The id of the page Roll20 object to place the particle emitter on. If omitted,
 * Campaign().get('playerpageid') will be used instead
 */
export declare function spawnFxBetweenPoints(start: {x: number, y: number}, end: {x: number, y: number}, type: FX | string,
                                      page_id?: string | undefined): void;

/**
 *
 * @param left The x-coordinate to place the particle emitter
 * @param top The y-coordinate to place the particle emitter
 * @param definition The characteristics of the particle emitter to place
 * @param page_id The id of the page Roll20 object to place the particle emitter on. If omitted,
 * Campaign().get('playerpageid') will be used instead
 */
export declare function spawnFxWithDefinition(left: number, top: number, definition: CustomFX,
                                       page_id?: string | undefined): void;

export declare function stopJukeboxPlaylist(): void;

/**
 * @param obj The Roll20 object to send to the back of its layer
 */
export declare function toBack(obj: Roll20Object): void;

/**
 * @param obj The Roll20 object to bring to the front of its layer
 */
export declare function toFront(obj: Roll20Object): void;

export declare const enum ObjTypes {
    Character = "character",
    Graphic = "graphic",
    Player = "player",
    Path = "path",
    Text = "text",
    Page = "page",
    Campaign = "campaign",
    Macro = "macro",
    RollableTable = "rollabletable",
    TableItem = "tableitem",
    Attribute = "attribute",
    Ability = "ability",
    Handout = "handout",
    Deck = "deck",
    Card = "card",
    Hand = "hand",
    Track = "jukeboxtrack",
    CustomFX = "custfx",
}

export declare const enum FX {
    BeamAcid = "beam-acid",
    BeamBlood = "beam-blood",
    BeamCharm = "beam-charm",
    BeamDeath = "beam-death",
    BeamFire = "beam-fire",
    BeamFrost = "beam-frost",
    BeamHoly = "beam-holy",
    BeamMagic = "beam-magic",
    BeamSlime = "beam-slime",
    BeamSmoke = "beam-smoke",
    BeamWater = "beam-water",
    BombAcid = "bomb-acid",
    BombBlood = "bomb-blood",
    BombCharm = "bomb-charm",
    BombDeath = "bomb-death",
    BombFire = "bomb-fire",
    BombFrost = "bomb-frost",
    BombHoly = "bomb-holy",
    BombMagic = "bomb-magic",
    BombSlime = "bomb-slime",
    BombSmoke = "bomb-smoke",
    BombWater = "bomb-water",
    BreathAcid = "breath-acid",
    BreathBlood = "breath-blood",
    BreathCharm = "breath-charm",
    BreathDeath = "breath-death",
    BreathFire = "breath-fire",
    BreathFrost = "breath-frost",
    BreathHoly = "breath-holy",
    BreathMagic = "breath-magic",
    BreathSlime = "breath-slime",
    BreathSmoke = "breath-smoke",
    BreathWater = "breath-water",
    BubblingAcid = "bubbling-acid",
    BubblingBlood = "bubbling-blood",
    BubblingCharm = "bubbling-charm",
    BubblingDeath = "bubbling-death",
    BubblingFire = "bubbling-fire",
    BubblingFrost = "bubbling-frost",
    BubblingHoly = "bubbling-holy",
    BubblingMagic = "bubbling-magic",
    BubblingSlime = "bubbling-slime",
    BubblingSmoke = "bubbling-smoke",
    BubblingWater = "bubbling-water",
    BurnAcid = "burn-acid",
    BurnBlood = "burn-blood",
    BurnCharm = "burn-charm",
    BurnDeath = "burn-death",
    BurnFire = "burn-fire",
    BurnFrost = "burn-frost",
    BurnHoly = "burn-holy",
    BurnMagic = "burn-magic",
    BurnSlime = "burn-slime",
    BurnSmoke = "burn-smoke",
    BurnWater = "burn-water",
    BurstAcid = "burst-acid",
    BurstBlood = "burst-blood",
    BurstCharm = "burst-charm",
    BurstDeath = "burst-death",
    BurstFire = "burst-fire",
    BurstFrost = "burst-frost",
    BurstHoly = "burst-holy",
    BurstMagic = "burst-magic",
    BurstSlime = "burst-slime",
    BurstSmoke = "burst-smoke",
    BurstWater = "burst-water",
    ExplodeAcid = "explode-acid",
    ExplodeBlood = "explode-blood",
    ExplodeCharm = "explode-charm",
    ExplodeDeath = "explode-death",
    ExplodeFire = "explode-fire",
    ExplodeFrost = "explode-frost",
    ExplodeHoly = "explode-holy",
    ExplodeMagic = "explode-magic",
    ExplodeSlime = "explode-slime",
    ExplodeSmoke = "explode-smoke",
    ExplodeWater = "explode-water",
    GlowAcid = "glow-acid",
    GlowBlood = "glow-blood",
    GlowCharm = "glow-charm",
    GlowDeath = "glow-death",
    GlowFire = "glow-fire",
    GlowFrost = "glow-frost",
    GlowHoly = "glow-holy",
    GlowMagic = "glow-magic",
    GlowSlime = "glow-slime",
    GlowSmoke = "glow-smoke",
    GlowWater = "glow-water",
    MissileAcid = "missile-acid",
    MissileBlood = "missile-blood",
    MissileCharm = "missile-charm",
    MissileDeath = "missile-death",
    MissileFire = "missile-fire",
    MissileFrost = "missile-frost",
    MissileHoly = "missile-holy",
    MissileMagic = "missile-magic",
    MissileSlime = "missile-slime",
    MissileSmoke = "missile-smoke",
    MissileWater = "missile-water",
    NovaAcid = "nova-acid",
    NovaBlood = "nova-blood",
    NovaCharm = "nova-charm",
    NovaDeath = "nova-death",
    NovaFire = "nova-fire",
    NovaFrost = "nova-frost",
    NovaHoly = "nova-holy",
    NovaMagic = "nova-magic",
    NovaSlime = "nova-slime",
    NovaSmoke = "nova-smoke",
    NovaWater = "nova-water",
    SplatterAcid = "splatter-acid",
    SplatterBlood = "splatter-blood",
    SplatterCharm = "splatter-charm",
    SplatterDeath = "splatter-death",
    SplatterFire = "splatter-fire",
    SplatterFrost = "splatter-frost",
    SplatterHoly = "splatter-holy",
    SplatterMagic = "splatter-magic",
    SplatterSlime = "splatter-slime",
    SplatterSmoke = "splatter-smoke",
    SplatterWater = "splatter-water",
}

export declare const enum StatusMarker {
    Red = "red",
    Blue = "blue",
    Green = "green",
    Brown = "brown",
    Purple = "purple",
    Pink = "pink",
    Yellow = "yellow",
    Dead = "dead",
    Skull = "skull",
    Sleepy = "sleepy",
    HalfHeart = "half-heart",
    HalfHaze = "half-haze",
    Interdiction = "interdiction",
    Snail = "snail",
    LightningHelix = "lightning-helix",
    Spanner = "spanner",
    ChainedHeart = "chained-heart",
    ChemicalBolt = "chemical-bolt",
    DeathZone = "death-zone",
    DrinkMe = "drink-me",
    EdgeCrack = "edge-crack",
    NinjaMask = "ninja-mask",
    Stopwatch = "stopwatch",
    FishingNet = "fishing-net",
    Overdrive = "overdrive",
    Strong = "strong",
    Fist = "fist",
    Padlock = "padlock",
    ThreeLeaves = "three-leaves",
    FluffyWing = "fluffy-wing",
    Pummeled = "pummeled",
    Tread = "tread",
    Arrowed = "arrowed",
    Aura = "aura",
    BackPain = "back-pain",
    BlackFlag = "black-flag",
    BleedingEye = "bleeding-eye",
    BoltShield = "bolt-shield",
    BrokenHeart = "broken-heart",
    Cobweb = "cobweb",
    BrokenShield = "broken-shield",
    FlyingFlag = "flying-flag",
    Radioactive = "radioactive",
    Trophy = "trophy",
    BrokenSkull = "broken-skull",
    FrozenOrb = "frozen-orb",
    RollingBomb = "rolling-bomb",
    WhiteTower = "white-tower",
    Grab = "grab",
    Screaming = "screaming",
    Grenade = "grenade",
    SentryGun = "sentry-gun",
    AllForOne = "all-for-one",
    AngelOutfit = "angel-outfit",
    ArcheryTarget = "archery-target",
}

export declare const enum Layer {
    GMLayer = "gmlayer",
    Objects = "objects",
    Map = "map",
    Walls = "walls",
}

export interface Roll20Object {
    id: string;

    /**
     * Asynchronous
     * @param {string} parameter
     * @param callback
     */
    get(parameter: string, callback: (value: string) => void): void;
    get(parameter: "_id" | "_pageid" | string): string;
    remove(): void;
    set(property: string, value: string | number | boolean): void;
    set(status: StatusMarker, value: number | boolean): void;
    set(attributes: object): void;
}

export interface Campaign extends Roll20Object {
    get(parameter: "_id"): "root";
    get(parameter: "_type"): "campaign";
    get(parameter: "initiativepage"): boolean; // Only returns true or false, not what the roll20 wiki says
    get(parameter: "playerpageid"): false | string;
    get(parameter: "playerspecificpages"): false | object;
    get(parameter: "turnorder" | "_journalfolder" | "_jukeboxfolder"): string;
}

export interface Path extends Roll20Object {
    get(parameter: "_type"): "path";
    get(parameter: "_path"): string;
    get(parameter: "fill"): "transparent" | string;
    get(parameter: "stroke"): "#000000" | string;
    get(parameter: "rotation" | "width" | "height" | "top" | "left"): 0 | number;
    get(parameter: "layer"): Layer;
    get(parameter: "stroke_width"): 5 | number;
    get(parameter: "scaleX" | "scaleY"): 1 | number;
    get(parameter: "controlledby"): string;
}

export interface Text extends Roll20Object {
    get(parameter: "_type"): "text";
    get(parameter: "rotation" | "top" | "left" | "width" | "height"): 0 | number;
    get(parameter: "text" | "controlledby"): string;
    get(parameter: "font_size"): 16 | number;
    get(parameter: "color"): "rgb(0, 0, 0)" | string;
    get(parameter: "font_family"): "Arial" | "Patrick Hand" | "Contrail One" | "Shadows Into Light" | "Candal";

    set(parameter: "rotation" | "top" | "left" | "width" | "height" | "font_size", value: number);
    set(parameter: "text" | "color" | "controlledby", value: string);
    set(parameter: "font_family", value: "Arial" | "Patrick Hand" | "Contrail One" | "Shadows Into Light" | "Candal");
}

export interface Message {
    who: string;
    playerid: string;
    type: string;
    content: string;
    origRoll?: string;
    inlinerolls?: object[];
    rolltemplate?: string;
    target?: string;
    target_name?: string;
    selected?: Array<{_id: string, _type: string}>;
}

export interface CustomFX {
    angle: number;
    duration?: number;
    emissionRate: number;
    gravity: {x: number, y: number};
    lifeSpan: number;
    maxParticles: number;
    size: number;
    speed: number;
    startColour: [number, number, number, number];
    endColour: [number, number, number, number];
    onDeath: string;
    // todo [effect]Random
}
