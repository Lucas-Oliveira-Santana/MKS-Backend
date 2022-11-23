import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateMovies1669022758299 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> { 
        await queryRunner.createTable(
        new Table({
            name: "movies",
            columns:[
                { 
                    name:"id", 
                    type:"uuid", 
                    isPrimary:true
                },
                {
                    name: "title",
                    type: "varchar"
                },
                {
                    name:"released",
                    type: "timestamp"
                },
                {
                    name: "description",
                    type: "varchar"
                },
            ]
        })
        
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
