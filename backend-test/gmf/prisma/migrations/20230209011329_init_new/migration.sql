-- CreateTable
CREATE TABLE "Operator" (
    "id" SERIAL NOT NULL,
    "operator" TEXT,

    CONSTRAINT "Operator_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Registration" (
    "id" SERIAL NOT NULL,
    "registration" TEXT NOT NULL,
    "operatorId" INTEGER,

    CONSTRAINT "Registration_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ACType" (
    "id" SERIAL NOT NULL,
    "acType" TEXT NOT NULL,
    "registrationId" INTEGER NOT NULL,

    CONSTRAINT "ACType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ComponentStatus" (
    "id" SERIAL NOT NULL,
    "status" TEXT,
    "acTypeId" INTEGER NOT NULL,

    CONSTRAINT "ComponentStatus_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AircraftDoc" (
    "id" SERIAL NOT NULL,
    "operatorId" INTEGER NOT NULL,
    "operator" TEXT,
    "registrationId" INTEGER NOT NULL,
    "registration" TEXT NOT NULL,
    "acTypeId" INTEGER NOT NULL,
    "acType" TEXT NOT NULL,
    "statusId" INTEGER NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "AircraftDoc_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FunctionalLocation" (
    "id" SERIAL NOT NULL,
    "functionalLocation" TEXT NOT NULL,

    CONSTRAINT "FunctionalLocation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PartNumber" (
    "id" SERIAL NOT NULL,
    "partNumber" TEXT NOT NULL,

    CONSTRAINT "PartNumber_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SerialNumber" (
    "id" SERIAL NOT NULL,
    "serialNumber" TEXT NOT NULL,

    CONSTRAINT "SerialNumber_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Description" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Description_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Task" (
    "id" SERIAL NOT NULL,
    "task" TEXT NOT NULL,

    CONSTRAINT "Task_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InstallDate" (
    "id" SERIAL NOT NULL,
    "installDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "InstallDate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TSN" (
    "id" SERIAL NOT NULL,
    "tsnHRS" INTEGER NOT NULL,
    "tsnCYC" INTEGER NOT NULL,

    CONSTRAINT "TSN_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Interval" (
    "id" SERIAL NOT NULL,
    "intervalHRS" INTEGER NOT NULL,
    "intervalCYC" INTEGER NOT NULL,
    "intervalDAYS" INTEGER NOT NULL,

    CONSTRAINT "Interval_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TSLA" (
    "id" SERIAL NOT NULL,
    "tslaHRS" INTEGER NOT NULL,
    "tslaCYC" INTEGER NOT NULL,
    "tslaDAYS" INTEGER NOT NULL,

    CONSTRAINT "TSLA_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LifeRemaining" (
    "id" SERIAL NOT NULL,
    "lifeRemaining" INTEGER NOT NULL,

    CONSTRAINT "LifeRemaining_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MPNumber" (
    "id" SERIAL NOT NULL,
    "mpNumberFL" INTEGER NOT NULL,
    "mpNumberPN" INTEGER NOT NULL,
    "mpNumberSN" INTEGER NOT NULL,
    "mpNumberDesc" INTEGER NOT NULL,
    "mpNumberTask" INTEGER NOT NULL,
    "mpNumberInstallDate" INTEGER NOT NULL,
    "mpNumberTSN" INTEGER NOT NULL,
    "mpNumberInterval" INTEGER NOT NULL,
    "mpNumberTSLA" INTEGER NOT NULL,
    "mpNumberLR" INTEGER NOT NULL,

    CONSTRAINT "MPNumber_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "timeControlled" (
    "no" SERIAL NOT NULL,
    "functionalLocation" TEXT NOT NULL,
    "partNumber" TEXT NOT NULL,
    "serialNumber" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "task" TEXT NOT NULL,
    "mpNumber" INTEGER NOT NULL,
    "installDate" TIMESTAMP(3) NOT NULL,
    "tsnHRS" INTEGER NOT NULL,
    "tsnCYC" INTEGER NOT NULL,
    "intervalHRS" INTEGER NOT NULL,
    "intervalCYC" INTEGER NOT NULL,
    "intervalDAYS" INTEGER NOT NULL,
    "tslaHRS" INTEGER NOT NULL,
    "tslaCYC" INTEGER NOT NULL,
    "tslaDAYS" INTEGER NOT NULL,
    "lifeRemaining" INTEGER NOT NULL,
    "aircraftDocId" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "nontimeControlled" (
    "no" SERIAL NOT NULL,
    "functionalLocation" TEXT NOT NULL,
    "partNumber" TEXT NOT NULL,
    "serialNumber" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "mpNumber" INTEGER NOT NULL,
    "task" TEXT NOT NULL,
    "installDate" TIMESTAMP(3) NOT NULL,
    "tsnHRS" INTEGER NOT NULL,
    "tsnCYC" INTEGER NOT NULL,
    "intervalHRS" INTEGER NOT NULL,
    "intervalCYC" INTEGER NOT NULL,
    "intervalDAYS" INTEGER NOT NULL,
    "tslaHRS" INTEGER NOT NULL,
    "tslaCYC" INTEGER NOT NULL,
    "tslaDAYS" INTEGER NOT NULL,
    "lifeRemaining" INTEGER NOT NULL,
    "aircraftDocId" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Registration_registration_key" ON "Registration"("registration");

-- CreateIndex
CREATE UNIQUE INDEX "ACType_acType_key" ON "ACType"("acType");

-- CreateIndex
CREATE UNIQUE INDEX "AircraftDoc_registration_key" ON "AircraftDoc"("registration");

-- CreateIndex
CREATE UNIQUE INDEX "AircraftDoc_acType_key" ON "AircraftDoc"("acType");

-- CreateIndex
CREATE UNIQUE INDEX "FunctionalLocation_functionalLocation_key" ON "FunctionalLocation"("functionalLocation");

-- CreateIndex
CREATE UNIQUE INDEX "PartNumber_partNumber_key" ON "PartNumber"("partNumber");

-- CreateIndex
CREATE UNIQUE INDEX "SerialNumber_serialNumber_key" ON "SerialNumber"("serialNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Description_description_key" ON "Description"("description");

-- CreateIndex
CREATE UNIQUE INDEX "Task_task_key" ON "Task"("task");

-- CreateIndex
CREATE UNIQUE INDEX "MPNumber_mpNumberFL_key" ON "MPNumber"("mpNumberFL");

-- CreateIndex
CREATE UNIQUE INDEX "MPNumber_mpNumberPN_key" ON "MPNumber"("mpNumberPN");

-- CreateIndex
CREATE UNIQUE INDEX "MPNumber_mpNumberSN_key" ON "MPNumber"("mpNumberSN");

-- CreateIndex
CREATE UNIQUE INDEX "MPNumber_mpNumberDesc_key" ON "MPNumber"("mpNumberDesc");

-- CreateIndex
CREATE UNIQUE INDEX "MPNumber_mpNumberTask_key" ON "MPNumber"("mpNumberTask");

-- CreateIndex
CREATE UNIQUE INDEX "MPNumber_mpNumberInstallDate_key" ON "MPNumber"("mpNumberInstallDate");

-- CreateIndex
CREATE UNIQUE INDEX "MPNumber_mpNumberTSN_key" ON "MPNumber"("mpNumberTSN");

-- CreateIndex
CREATE UNIQUE INDEX "MPNumber_mpNumberInterval_key" ON "MPNumber"("mpNumberInterval");

-- CreateIndex
CREATE UNIQUE INDEX "MPNumber_mpNumberTSLA_key" ON "MPNumber"("mpNumberTSLA");

-- CreateIndex
CREATE UNIQUE INDEX "MPNumber_mpNumberLR_key" ON "MPNumber"("mpNumberLR");

-- CreateIndex
CREATE UNIQUE INDEX "timeControlled_functionalLocation_key" ON "timeControlled"("functionalLocation");

-- CreateIndex
CREATE UNIQUE INDEX "timeControlled_partNumber_key" ON "timeControlled"("partNumber");

-- CreateIndex
CREATE UNIQUE INDEX "nontimeControlled_functionalLocation_key" ON "nontimeControlled"("functionalLocation");

-- CreateIndex
CREATE UNIQUE INDEX "nontimeControlled_partNumber_key" ON "nontimeControlled"("partNumber");

-- AddForeignKey
ALTER TABLE "Registration" ADD CONSTRAINT "Registration_operatorId_fkey" FOREIGN KEY ("operatorId") REFERENCES "Operator"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ACType" ADD CONSTRAINT "ACType_registrationId_fkey" FOREIGN KEY ("registrationId") REFERENCES "Registration"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ComponentStatus" ADD CONSTRAINT "ComponentStatus_acTypeId_fkey" FOREIGN KEY ("acTypeId") REFERENCES "ACType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AircraftDoc" ADD CONSTRAINT "AircraftDoc_operatorId_fkey" FOREIGN KEY ("operatorId") REFERENCES "Operator"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AircraftDoc" ADD CONSTRAINT "AircraftDoc_registrationId_fkey" FOREIGN KEY ("registrationId") REFERENCES "Registration"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AircraftDoc" ADD CONSTRAINT "AircraftDoc_acTypeId_fkey" FOREIGN KEY ("acTypeId") REFERENCES "ACType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AircraftDoc" ADD CONSTRAINT "AircraftDoc_statusId_fkey" FOREIGN KEY ("statusId") REFERENCES "ComponentStatus"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MPNumber" ADD CONSTRAINT "MPNumber_mpNumberFL_fkey" FOREIGN KEY ("mpNumberFL") REFERENCES "FunctionalLocation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MPNumber" ADD CONSTRAINT "MPNumber_mpNumberPN_fkey" FOREIGN KEY ("mpNumberPN") REFERENCES "PartNumber"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MPNumber" ADD CONSTRAINT "MPNumber_mpNumberSN_fkey" FOREIGN KEY ("mpNumberSN") REFERENCES "SerialNumber"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MPNumber" ADD CONSTRAINT "MPNumber_mpNumberDesc_fkey" FOREIGN KEY ("mpNumberDesc") REFERENCES "Description"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MPNumber" ADD CONSTRAINT "MPNumber_mpNumberTask_fkey" FOREIGN KEY ("mpNumberTask") REFERENCES "Task"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MPNumber" ADD CONSTRAINT "MPNumber_mpNumberInstallDate_fkey" FOREIGN KEY ("mpNumberInstallDate") REFERENCES "InstallDate"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MPNumber" ADD CONSTRAINT "MPNumber_mpNumberTSN_fkey" FOREIGN KEY ("mpNumberTSN") REFERENCES "TSN"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MPNumber" ADD CONSTRAINT "MPNumber_mpNumberInterval_fkey" FOREIGN KEY ("mpNumberInterval") REFERENCES "Interval"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MPNumber" ADD CONSTRAINT "MPNumber_mpNumberTSLA_fkey" FOREIGN KEY ("mpNumberTSLA") REFERENCES "TSLA"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MPNumber" ADD CONSTRAINT "MPNumber_mpNumberLR_fkey" FOREIGN KEY ("mpNumberLR") REFERENCES "LifeRemaining"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "timeControlled" ADD CONSTRAINT "timeControlled_aircraftDocId_fkey" FOREIGN KEY ("aircraftDocId") REFERENCES "AircraftDoc"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "timeControlled" ADD CONSTRAINT "timeControlled_mpNumber_fkey" FOREIGN KEY ("mpNumber") REFERENCES "MPNumber"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "nontimeControlled" ADD CONSTRAINT "nontimeControlled_aircraftDocId_fkey" FOREIGN KEY ("aircraftDocId") REFERENCES "AircraftDoc"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "nontimeControlled" ADD CONSTRAINT "nontimeControlled_mpNumber_fkey" FOREIGN KEY ("mpNumber") REFERENCES "MPNumber"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
