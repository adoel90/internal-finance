"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20250123095853 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20250123095853 extends migrations_1.Migration {
    async up() {
        this.addSql(`create table if not exists "wishlist" ("id" text not null, "customer_id" text not null, "sales_channel_id" text not null, "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "wishlist_pkey" primary key ("id"));`);
        this.addSql(`CREATE INDEX IF NOT EXISTS "IDX_wishlist_deleted_at" ON "wishlist" (deleted_at) WHERE deleted_at IS NULL;`);
        this.addSql(`CREATE UNIQUE INDEX IF NOT EXISTS "IDX_wishlist_customer_id_sales_channel_id_unique" ON "wishlist" (customer_id, sales_channel_id) WHERE deleted_at IS NULL;`);
        this.addSql(`create table if not exists "wishlist_item" ("id" text not null, "product_variant_id" text not null, "wishlist_id" text not null, "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "wishlist_item_pkey" primary key ("id"));`);
        this.addSql(`CREATE INDEX IF NOT EXISTS "IDX_wishlist_item_wishlist_id" ON "wishlist_item" (wishlist_id) WHERE deleted_at IS NULL;`);
        this.addSql(`CREATE INDEX IF NOT EXISTS "IDX_wishlist_item_deleted_at" ON "wishlist_item" (deleted_at) WHERE deleted_at IS NULL;`);
        this.addSql(`CREATE UNIQUE INDEX IF NOT EXISTS "IDX_wishlist_item_product_variant_id_wishlist_id_unique" ON "wishlist_item" (product_variant_id, wishlist_id) WHERE deleted_at IS NULL;`);
        this.addSql(`alter table if exists "wishlist_item" add constraint "wishlist_item_wishlist_id_foreign" foreign key ("wishlist_id") references "wishlist" ("id") on update cascade;`);
    }
    async down() {
        this.addSql(`alter table if exists "wishlist_item" drop constraint if exists "wishlist_item_wishlist_id_foreign";`);
        this.addSql(`drop table if exists "wishlist" cascade;`);
        this.addSql(`drop table if exists "wishlist_item" cascade;`);
    }
}
exports.Migration20250123095853 = Migration20250123095853;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWlncmF0aW9uMjAyNTAxMjMwOTU4NTMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy93aXNobGlzdC9taWdyYXRpb25zL01pZ3JhdGlvbjIwMjUwMTIzMDk1ODUzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNEQUFrRDtBQUVsRCxNQUFhLHVCQUF3QixTQUFRLHNCQUFTO0lBRTNDLEtBQUssQ0FBQyxFQUFFO1FBQ2YsSUFBSSxDQUFDLE1BQU0sQ0FBQyw0U0FBNFMsQ0FBQyxDQUFDO1FBQzFULElBQUksQ0FBQyxNQUFNLENBQUMsMkdBQTJHLENBQUMsQ0FBQztRQUN6SCxJQUFJLENBQUMsTUFBTSxDQUFDLDhKQUE4SixDQUFDLENBQUM7UUFFNUssSUFBSSxDQUFDLE1BQU0sQ0FBQyx3VEFBd1QsQ0FBQyxDQUFDO1FBQ3RVLElBQUksQ0FBQyxNQUFNLENBQUMsdUhBQXVILENBQUMsQ0FBQztRQUNySSxJQUFJLENBQUMsTUFBTSxDQUFDLHFIQUFxSCxDQUFDLENBQUM7UUFDbkksSUFBSSxDQUFDLE1BQU0sQ0FBQyw0S0FBNEssQ0FBQyxDQUFDO1FBRTFMLElBQUksQ0FBQyxNQUFNLENBQUMsc0tBQXNLLENBQUMsQ0FBQztJQUN0TCxDQUFDO0lBRVEsS0FBSyxDQUFDLElBQUk7UUFDakIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxzR0FBc0csQ0FBQyxDQUFDO1FBRXBILElBQUksQ0FBQyxNQUFNLENBQUMsMENBQTBDLENBQUMsQ0FBQztRQUV4RCxJQUFJLENBQUMsTUFBTSxDQUFDLCtDQUErQyxDQUFDLENBQUM7SUFDL0QsQ0FBQztDQUVGO0FBdkJELDBEQXVCQyJ9