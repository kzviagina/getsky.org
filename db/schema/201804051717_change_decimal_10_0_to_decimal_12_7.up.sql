ALTER TABLE `Adverts` 
    MODIFY COLUMN `AmountFrom` DECIMAL(12, 7) NOT NULL,
    MODIFY COLUMN `AmountTo` DECIMAL(12, 7) NULL,
    MODIFY COLUMN `FixedPrice` DECIMAL(12, 7) NULL,
    MODIFY COLUMN `PercentageAdjustment` DECIMAL(12, 7) NULL;
