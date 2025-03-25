-- CreateTable
CREATE TABLE `part_test_legacy` (
    `pn` VARCHAR(15) NOT NULL,
    `application` VARCHAR(20) NOT NULL,
    `revision` INTEGER NOT NULL,
    `revision_datetime` DATETIME(0) NOT NULL,
    `fixture` VARCHAR(20) NULL,
    `air_fixture` VARCHAR(20) NULL,
    `nominal_voltage` TINYINT NOT NULL,
    `tube_qty_limit` TINYINT NULL,
    `is_shield_installed` TINYINT NOT NULL,
    `is_diode_installed` TINYINT NOT NULL,
    `contact_1_type` CHAR(1) NOT NULL,
    `contact_2_type` CHAR(1) NULL,
    `contact_3_type` CHAR(1) NULL,
    `contact_4_type` CHAR(1) NULL,
    `atm` TINYINT NOT NULL,
    `atm_max_time` DECIMAL(10, 4) NULL,
    `atm_start_frequency` DECIMAL(10, 4) NULL,
    `atm_end_frequency` DECIMAL(10, 4) NULL,
    `atm_step_frequency` DECIMAL(10, 4) NOT NULL,
    `atm_coil_voltage` DECIMAL(10, 4) NULL,
    `buz` INTEGER NOT NULL,
    `buz_cycles` INTEGER NULL,
    `buz_frequency` INTEGER NULL,
    `crs` TINYINT NOT NULL,
    `crs_max_resistance` DECIMAL(10, 4) NULL,
    `crs_min_resistance` DECIMAL(10, 4) NULL,
    `crs_nom_resistance` DECIMAL(10, 4) NULL,
    `crs_tolerance` DECIMAL(10, 4) NULL,
    `dio` TINYINT NOT NULL,
    `dcp` TINYINT NOT NULL,
    `dcp_max_peak_to_peak` DECIMAL(10, 4) NULL,
    `dcr` TINYINT NOT NULL,
    `dcr_max_peak` DECIMAL(10, 4) NULL,
    `dcr_coil_voltage` DECIMAL(10, 4) NULL,
    `dcr_start_frequency` INTEGER NULL,
    `dcr_end_frequency` INTEGER NULL,
    `dcr_step_frequency` INTEGER NULL,
    `dcr_start_measurment_window` DECIMAL(10, 4) NULL,
    `dcr_window_width` DECIMAL(10, 4) NULL,
    `dcr_sweeps` INTEGER NULL,
    `fbo` TINYINT NOT NULL,
    `fbo_coil_voltage` DECIMAL(10, 4) NULL,
    `fbo_percent_overdrive` DECIMAL(10, 4) NULL,
    `fbo_delay` DECIMAL(9, 6) NULL,
    `irs` TINYINT NOT NULL,
    `irs_range` DECIMAL(10, 4) NULL,
    `irs_coil_voltage` DECIMAL(10, 4) NULL,
    `irs_delay` DECIMAL(9, 6) NULL,
    `kel` TINYINT NOT NULL,
    `ocu` TINYINT NOT NULL,
    `ocu_max_current` DECIMAL(10, 4) NULL,
    `ocu_min_current` DECIMAL(10, 4) NULL,
    `otm` TINYINT NOT NULL,
    `otm_max_time` DECIMAL(10, 4) NULL,
    `otm_start_frequency` DECIMAL(10, 4) NULL,
    `otm_end_frequency` DECIMAL(10, 4) NULL,
    `otm_step_frequency` DECIMAL(10, 4) NULL,
    `otm_coil_voltage` DECIMAL(10, 4) NULL,
    `ovd` TINYINT NOT NULL,
    `ovd_min_differential` DECIMAL(10, 4) NULL,
    `ovd_max_differential` DECIMAL(10, 4) NULL,
    `ovr` TINYINT NOT NULL,
    `ovr_max_percentage` DECIMAL(10, 4) NULL,
    `ovr_min_percentage` DECIMAL(10, 4) NULL,
    `ovt` VARCHAR(45) NOT NULL,
    `ovt_max_voltage` DECIMAL(10, 4) NULL,
    `ovt_min_voltage` DECIMAL(10, 4) NULL,
    `ovt_delay` DECIMAL(9, 6) NULL,
    `rcu` TINYINT NOT NULL,
    `rcu_max_current` DECIMAL(10, 4) NULL,
    `rcu_min_current` DECIMAL(10, 4) NULL,
    `rtm` TINYINT NOT NULL,
    `rtm_max_time` DECIMAL(10, 4) NULL,
    `rtm_start_frequency` DECIMAL(10, 4) NULL,
    `rtm_end_frequency` DECIMAL(10, 4) NULL,
    `rtm_step_frequency` DECIMAL(10, 4) NULL,
    `rtm_coil_voltage` DECIMAL(10, 4) NULL,
    `rvt` TINYINT NOT NULL,
    `rvt_max_voltage` DECIMAL(10, 4) NULL,
    `rvt_min_voltage` DECIMAL(10, 4) NULL,
    `rvt_delay` DECIMAL(9, 6) NOT NULL,
    `scr` TINYINT NOT NULL,
    `scr_max_resistance` DECIMAL(10, 4) NULL,
    `scr_min_resistance` DECIMAL(10, 4) NULL,
    `scr_delay` DECIMAL(9, 6) NULL,
    `scs` TINYINT NOT NULL,
    `scs_max_delta` DECIMAL(10, 4) NULL,
    `scs_coil_voltage` DECIMAL(10, 4) NULL,
    `scs_cycles` INTEGER NULL,
    `scs_warm_up` INTEGER NULL,
    `scs_delay` DECIMAL(9, 6) NULL,
    `sho` TINYINT NOT NULL,
    `sho_threshold_resistance` DECIMAL(10, 4) NULL,
    `ttm` TINYINT NOT NULL,
    `ttm_min_time` DECIMAL(10, 4) NULL,

    PRIMARY KEY (`pn`, `application`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `part_test_specifications` (
    `pn` VARCHAR(15) NOT NULL,
    `application` VARCHAR(20) NOT NULL,
    `revision` INTEGER NOT NULL,
    `revision_datetime` DATETIME(0) NOT NULL,
    `fixture` VARCHAR(20) NULL,
    `air_fixture` VARCHAR(20) NULL,
    `nominal_voltage` DECIMAL(5, 3) NOT NULL,
    `sort_file` VARCHAR(10) NULL,
    `graph_voltage` DECIMAL(5, 3) NULL,
    `tube_qty_limit` TINYINT NULL,
    `is_shield_installed` TINYINT NOT NULL,
    `is_diode_installed` TINYINT NOT NULL,
    `contact_1_type` CHAR(1) NOT NULL,
    `contact_2_type` CHAR(1) NULL,
    `contact_3_type` CHAR(1) NULL,
    `contact_4_type` CHAR(1) NULL,
    `atm` TINYINT NOT NULL,
    `atm_max_time` DECIMAL(10, 4) NULL,
    `buz` INTEGER NOT NULL,
    `buz_cycles` INTEGER NULL,
    `buz_frequency` INTEGER NULL,
    `crs` TINYINT NOT NULL,
    `crs_nom_resistance` DECIMAL(10, 4) NULL,
    `crs_tolerance` DECIMAL(10, 4) NULL,
    `dio` TINYINT NOT NULL,
    `dcp` TINYINT NOT NULL,
    `dcp_max_peak_to_peak` DECIMAL(10, 4) NULL,
    `dcr` TINYINT NOT NULL,
    `dcr_max_peak` DECIMAL(10, 4) NULL,
    `dcr_start_measurment_window` DECIMAL(10, 4) NULL,
    `dcr_window_width` DECIMAL(10, 4) NULL,
    `dcr_sweeps` INTEGER NULL,
    `fbo` TINYINT NOT NULL,
    `fbo_percent_overdrive` DECIMAL(10, 4) NULL,
    `fbo_delay` DECIMAL(9, 6) NULL,
    `irs` TINYINT NOT NULL,
    `irs_range` DECIMAL(10, 4) NULL,
    `irs_test_voltage` DECIMAL(10, 4) NULL,
    `irs_delay` DECIMAL(9, 6) NULL,
    `kel` TINYINT NOT NULL,
    `ocu` TINYINT NOT NULL,
    `ocu_max_current` DECIMAL(10, 4) NULL,
    `ocu_min_current` DECIMAL(10, 4) NULL,
    `otm` TINYINT NOT NULL,
    `otm_max_time` DECIMAL(10, 4) NULL,
    `vtd` TINYINT NOT NULL,
    `vtd_min_differential` DECIMAL(10, 4) NULL,
    `vtd_max_differential` DECIMAL(10, 4) NULL,
    `vtr` TINYINT NOT NULL,
    `vtr_max_percentage` DECIMAL(10, 4) NULL,
    `vtr_min_percentage` DECIMAL(10, 4) NULL,
    `ovt` TINYINT NOT NULL,
    `ovt_max_voltage` DECIMAL(10, 4) NULL,
    `ovt_min_voltage` DECIMAL(10, 4) NULL,
    `ovt_delay` DECIMAL(9, 6) NULL,
    `rcu` TINYINT NOT NULL,
    `rcu_max_current` DECIMAL(10, 4) NULL,
    `rcu_min_current` DECIMAL(10, 4) NULL,
    `rtm` TINYINT NOT NULL,
    `rtm_max_time` DECIMAL(10, 4) NULL,
    `rvt` TINYINT NOT NULL,
    `rvt_max_voltage` DECIMAL(10, 4) NULL,
    `rvt_min_voltage` DECIMAL(10, 4) NULL,
    `rvt_delay` DECIMAL(9, 6) NULL,
    `scr` TINYINT NOT NULL,
    `scr_max_resistance` DECIMAL(10, 4) NULL,
    `scr_min_resistance` DECIMAL(10, 4) NULL,
    `scr_delay` DECIMAL(9, 6) NULL,
    `scs` TINYINT NOT NULL,
    `scs_max_delta` DECIMAL(10, 4) NULL,
    `scs_coil_voltage` DECIMAL(10, 4) NULL,
    `scs_cycles` INTEGER NULL,
    `scs_warm_up` INTEGER NULL,
    `scs_delay` DECIMAL(9, 6) NULL,
    `sho` TINYINT NOT NULL,
    `sho_threshold_resistance` DECIMAL(10, 4) NULL,
    `ttm` TINYINT NOT NULL,
    `ttm_min_time` DECIMAL(10, 4) NULL,
    `bvs` TINYINT NOT NULL,
    `bvs_test_voltage` DECIMAL(4, 0) NULL,
    `bvs_hi_lim` DECIMAL(6, 1) NULL,
    `bvs_lo_lim` DECIMAL(6, 1) NULL,
    `bvs_ramp_up` DECIMAL(4, 1) NULL,
    `bvs_dwell_time` DECIMAL(4, 1) NULL,
    `bvs_ramp_down` DECIMAL(4, 1) NULL,
    `bvs_charge_lo` DECIMAL(4, 1) NULL,

    INDEX `Sort_file_idx`(`sort_file`),
    PRIMARY KEY (`pn`, `application`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sort_limits` (
    `file_name` VARCHAR(10) NOT NULL,
    `low_limit` DECIMAL(6, 3) NULL,
    `hi_limit` DECIMAL(6, 3) NULL,

    PRIMARY KEY (`file_name`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sys_config` (
    `variable` VARCHAR(128) NOT NULL,
    `value` VARCHAR(128) NULL,
    `set_time` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `set_by` VARCHAR(128) NULL,

    PRIMARY KEY (`variable`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `test` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `pn` VARCHAR(15) NOT NULL,
    `application` VARCHAR(20) NOT NULL,
    `user` INTEGER NOT NULL,
    `is_standard_test` TINYINT NOT NULL DEFAULT 1,
    `type_of_test` VARCHAR(20) NOT NULL,
    `revision` INTEGER NOT NULL,
    `job_order` VARCHAR(20) NULL,
    `plt` VARCHAR(20) NULL,
    `datecode` CHAR(4) NOT NULL,
    `lot_number` VARCHAR(20) NULL,
    `start_datetime` DATETIME(0) NOT NULL,
    `end_datetime` DATETIME(0) NOT NULL,
    `relays_tested` INTEGER NOT NULL,
    `relays_passed_420` INTEGER NULL,
    `relays_failed_420` INTEGER NOT NULL,
    `yield` DECIMAL(6, 3) NOT NULL,
    `relays_failed_non_420` INTEGER NOT NULL,
    `total_quantity` INTEGER NOT NULL,
    `reject_quantity` INTEGER NULL,
    `final_yield` DECIMAL(6, 3) NULL,
    `issue_quantity` INTEGER NOT NULL,
    `issue_yield` DECIMAL(6, 3) NOT NULL,

    INDEX `part_test_id_idx`(`pn`, `application`),
    INDEX `user_idx`(`user`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `test_fails_non_420` (
    `id` INTEGER NOT NULL DEFAULT 0,
    `total_failed_non_420` INTEGER NOT NULL DEFAULT 0,
    `failed_mechanical_crack` INTEGER NOT NULL DEFAULT 0,
    `failed_mechanical_potting` INTEGER NOT NULL DEFAULT 0,
    `failed_mechanical_plating` INTEGER NOT NULL DEFAULT 0,
    `failed_mechanical_stamping` INTEGER NOT NULL DEFAULT 0,
    `failed_mechanical_trimming` INTEGER NOT NULL DEFAULT 0,
    `failed_mechanical_dimensional` INTEGER NOT NULL DEFAULT 0,
    `failed_mechanical_other` INTEGER NOT NULL DEFAULT 0,
    `failed_electrical_thermal` INTEGER NOT NULL DEFAULT 0,
    `failed_electrical_magnet` INTEGER NOT NULL DEFAULT 0,
    `failed_electrical_resonent` INTEGER NOT NULL DEFAULT 0,
    `failed_electrical_breakdown` INTEGER NOT NULL DEFAULT 0,
    `failed_electrical_timing` INTEGER NOT NULL DEFAULT 0,
    `failed_electrical_other` INTEGER NOT NULL DEFAULT 0,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `test_result` (
    `test_id` INTEGER NOT NULL,
    `dut_no` SMALLINT NOT NULL,
    `test_type` CHAR(50) NOT NULL,
    `switch` TINYINT NOT NULL,
    `result` VARCHAR(20) NOT NULL,
    `value` DECIMAL(21, 4) NULL,

    INDEX `test_test_result_id_idx`(`test_id`),
    PRIMARY KEY (`test_id`, `dut_no`, `test_type`, `switch`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `test_result_insulation_resistance` (
    `test_id` INTEGER NOT NULL,
    `dut_no` SMALLINT NOT NULL,
    `coil_value` DECIMAL(17, 0) NULL,
    `shield_value` DECIMAL(17, 0) NULL,
    `switch1t_value` DECIMAL(17, 0) NULL,
    `switch1b_value` DECIMAL(17, 0) NULL,
    `switch2t_value` DECIMAL(17, 0) NULL,
    `switch2b_value` DECIMAL(17, 0) NULL,
    `switch3t_value` DECIMAL(17, 0) NULL,
    `switch3b_value` DECIMAL(17, 0) NULL,
    `switch4t_value` DECIMAL(17, 0) NULL,
    `switch4b_value` DECIMAL(17, 0) NULL,

    INDEX `test_test_result_id_idx`(`test_id`),
    PRIMARY KEY (`test_id`, `dut_no`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(20) NOT NULL,
    `first_name` VARCHAR(20) NOT NULL,
    `last_name` VARCHAR(20) NOT NULL,
    `user_type` VARCHAR(20) NOT NULL,
    `password` VARCHAR(20) NOT NULL,

    UNIQUE INDEX `username_UNIQUE`(`username`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user_log` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_user` INTEGER NOT NULL,
    `datetime` DATETIME(0) NOT NULL,

    INDEX `Id User_idx`(`id_user`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `part_test_specifications` ADD CONSTRAINT `Sort_file` FOREIGN KEY (`sort_file`) REFERENCES `sort_limits`(`file_name`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `test` ADD CONSTRAINT `part_test_id_application` FOREIGN KEY (`pn`, `application`) REFERENCES `part_test_specifications`(`pn`, `application`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `test` ADD CONSTRAINT `user` FOREIGN KEY (`user`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `test_fails_non_420` ADD CONSTRAINT `Test ID` FOREIGN KEY (`id`) REFERENCES `test`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `test_result` ADD CONSTRAINT `test_test_result_id` FOREIGN KEY (`test_id`) REFERENCES `test`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `test_result_insulation_resistance` ADD CONSTRAINT `Test_ID` FOREIGN KEY (`test_id`) REFERENCES `test`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `user_log` ADD CONSTRAINT `Id User` FOREIGN KEY (`id_user`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
