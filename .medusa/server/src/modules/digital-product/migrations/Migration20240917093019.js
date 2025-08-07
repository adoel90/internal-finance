"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20240917093019 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20240917093019 extends migrations_1.Migration {
    async up() {
        this.addSql('create table if not exists "digital_product" ("id" text not null, "name" text not null, "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "digital_product_pkey" primary key ("id"));');
        this.addSql('create table if not exists "digital_product_media" ("id" text not null, "type" text check ("type" in (\'main\', \'preview\')) not null, "fileId" text not null, "mimeType" text not null, "digital_product_id" text not null, "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "digital_product_media_pkey" primary key ("id"));');
        this.addSql('CREATE INDEX IF NOT EXISTS "IDX_digital_product_media_digital_product_id" ON "digital_product_media" (digital_product_id) WHERE deleted_at IS NULL;');
        this.addSql('create table if not exists "digital_product_order" ("id" text not null, "status" text check ("status" in (\'pending\', \'sent\')) not null, "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "digital_product_order_pkey" primary key ("id"));');
        this.addSql('create table if not exists "digitalproduct_digitalproductorders" ("digital_product_id" text not null, "digital_product_order_id" text not null, constraint "digitalproduct_digitalproductorders_pkey" primary key ("digital_product_id", "digital_product_order_id"));');
        this.addSql('alter table if exists "digital_product_media" add constraint "digital_product_media_digital_product_id_foreign" foreign key ("digital_product_id") references "digital_product" ("id") on update cascade on delete cascade;');
        this.addSql('alter table if exists "digitalproduct_digitalproductorders" add constraint "digitalproduct_digitalproductorders_digital_product_id_foreign" foreign key ("digital_product_id") references "digital_product" ("id") on update cascade on delete cascade;');
        this.addSql('alter table if exists "digitalproduct_digitalproductorders" add constraint "digitalproduct_digitalproductorders_digital_produ_c0c21_foreign" foreign key ("digital_product_order_id") references "digital_product_order" ("id") on update cascade on delete cascade;');
    }
    async down() {
        this.addSql('alter table if exists "digital_product_media" drop constraint if exists "digital_product_media_digital_product_id_foreign";');
        this.addSql('alter table if exists "digitalproduct_digitalproductorders" drop constraint if exists "digitalproduct_digitalproductorders_digital_product_id_foreign";');
        this.addSql('alter table if exists "digitalproduct_digitalproductorders" drop constraint if exists "digitalproduct_digitalproductorders_digital_produ_c0c21_foreign";');
        this.addSql('drop table if exists "digital_product" cascade;');
        this.addSql('drop table if exists "digital_product_media" cascade;');
        this.addSql('drop table if exists "digital_product_order" cascade;');
        this.addSql('drop table if exists "digitalproduct_digitalproductorders" cascade;');
    }
}
exports.Migration20240917093019 = Migration20240917093019;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWlncmF0aW9uMjAyNDA5MTcwOTMwMTkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9kaWdpdGFsLXByb2R1Y3QvbWlncmF0aW9ucy9NaWdyYXRpb24yMDI0MDkxNzA5MzAxOS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzREFBa0Q7QUFFbEQsTUFBYSx1QkFBd0IsU0FBUSxzQkFBUztJQUVwRCxLQUFLLENBQUMsRUFBRTtRQUNOLElBQUksQ0FBQyxNQUFNLENBQUMsaVJBQWlSLENBQUMsQ0FBQztRQUUvUixJQUFJLENBQUMsTUFBTSxDQUFDLDZaQUE2WixDQUFDLENBQUM7UUFDM2EsSUFBSSxDQUFDLE1BQU0sQ0FBQyxxSkFBcUosQ0FBQyxDQUFDO1FBRW5LLElBQUksQ0FBQyxNQUFNLENBQUMsMlVBQTJVLENBQUMsQ0FBQztRQUV6VixJQUFJLENBQUMsTUFBTSxDQUFDLHdRQUF3USxDQUFDLENBQUM7UUFFdFIsSUFBSSxDQUFDLE1BQU0sQ0FBQyw2TkFBNk4sQ0FBQyxDQUFDO1FBRTNPLElBQUksQ0FBQyxNQUFNLENBQUMseVBBQXlQLENBQUMsQ0FBQztRQUN2USxJQUFJLENBQUMsTUFBTSxDQUFDLHNRQUFzUSxDQUFDLENBQUM7SUFDdFIsQ0FBQztJQUVELEtBQUssQ0FBQyxJQUFJO1FBQ1IsSUFBSSxDQUFDLE1BQU0sQ0FBQyw2SEFBNkgsQ0FBQyxDQUFDO1FBRTNJLElBQUksQ0FBQyxNQUFNLENBQUMseUpBQXlKLENBQUMsQ0FBQztRQUV2SyxJQUFJLENBQUMsTUFBTSxDQUFDLDBKQUEwSixDQUFDLENBQUM7UUFFeEssSUFBSSxDQUFDLE1BQU0sQ0FBQyxpREFBaUQsQ0FBQyxDQUFDO1FBRS9ELElBQUksQ0FBQyxNQUFNLENBQUMsdURBQXVELENBQUMsQ0FBQztRQUVyRSxJQUFJLENBQUMsTUFBTSxDQUFDLHVEQUF1RCxDQUFDLENBQUM7UUFFckUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxxRUFBcUUsQ0FBQyxDQUFDO0lBQ3JGLENBQUM7Q0FFRjtBQWxDRCwwREFrQ0MifQ==