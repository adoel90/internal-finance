"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20241213160023 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20241213160023 extends migrations_1.Migration {
    async up() {
        this.addSql('CREATE INDEX IF NOT EXISTS "IDX_digital_product_deleted_at" ON "digital_product" (deleted_at) WHERE deleted_at IS NULL;');
        this.addSql('CREATE INDEX IF NOT EXISTS "IDX_digital_product_media_deleted_at" ON "digital_product_media" (deleted_at) WHERE deleted_at IS NULL;');
        this.addSql('CREATE INDEX IF NOT EXISTS "IDX_digital_product_order_deleted_at" ON "digital_product_order" (deleted_at) WHERE deleted_at IS NULL;');
        this.addSql('alter table if exists "digitalproduct_digitalproductorders" drop constraint if exists "digitalproduct_digitalproductorders_pkey";');
        this.addSql('alter table if exists "digitalproduct_digitalproductorders" add constraint "digitalproduct_digitalproductorders_pkey" primary key ("digital_product_order_id", "digital_product_id");');
    }
    async down() {
        this.addSql('drop index if exists "IDX_digital_product_deleted_at";');
        this.addSql('drop index if exists "IDX_digital_product_media_deleted_at";');
        this.addSql('drop index if exists "IDX_digital_product_order_deleted_at";');
        this.addSql('alter table if exists "digitalproduct_digitalproductorders" drop constraint if exists "digitalproduct_digitalproductorders_pkey";');
        this.addSql('alter table if exists "digitalproduct_digitalproductorders" add constraint "digitalproduct_digitalproductorders_pkey" primary key ("digital_product_id", "digital_product_order_id");');
    }
}
exports.Migration20241213160023 = Migration20241213160023;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWlncmF0aW9uMjAyNDEyMTMxNjAwMjMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9kaWdpdGFsLXByb2R1Y3QvbWlncmF0aW9ucy9NaWdyYXRpb24yMDI0MTIxMzE2MDAyMy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzREFBa0Q7QUFFbEQsTUFBYSx1QkFBd0IsU0FBUSxzQkFBUztJQUVwRCxLQUFLLENBQUMsRUFBRTtRQUNOLElBQUksQ0FBQyxNQUFNLENBQUMseUhBQXlILENBQUMsQ0FBQztRQUV2SSxJQUFJLENBQUMsTUFBTSxDQUFDLHFJQUFxSSxDQUFDLENBQUM7UUFFbkosSUFBSSxDQUFDLE1BQU0sQ0FBQyxxSUFBcUksQ0FBQyxDQUFDO1FBRW5KLElBQUksQ0FBQyxNQUFNLENBQUMsbUlBQW1JLENBQUMsQ0FBQztRQUNqSixJQUFJLENBQUMsTUFBTSxDQUFDLHVMQUF1TCxDQUFDLENBQUM7SUFDdk0sQ0FBQztJQUVELEtBQUssQ0FBQyxJQUFJO1FBQ1IsSUFBSSxDQUFDLE1BQU0sQ0FBQyx3REFBd0QsQ0FBQyxDQUFDO1FBRXRFLElBQUksQ0FBQyxNQUFNLENBQUMsOERBQThELENBQUMsQ0FBQztRQUU1RSxJQUFJLENBQUMsTUFBTSxDQUFDLDhEQUE4RCxDQUFDLENBQUM7UUFFNUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxtSUFBbUksQ0FBQyxDQUFDO1FBQ2pKLElBQUksQ0FBQyxNQUFNLENBQUMsdUxBQXVMLENBQUMsQ0FBQztJQUN2TSxDQUFDO0NBRUY7QUF4QkQsMERBd0JDIn0=