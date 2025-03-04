import { Builder, IBuilder } from '@/__tests__/builder';
import {
  LockEventItemSchema,
  LockingEventType,
  UnlockEventItemSchema,
  WithdrawEventItemSchema,
} from '@/domain/locking/entities/schemas/locking-event.schema';
import { faker } from '@faker-js/faker';
import { Hex, getAddress } from 'viem';
import { z } from 'zod';

export function lockEventItemBuilder(): IBuilder<
  z.infer<typeof LockEventItemSchema>
> {
  return new Builder<z.infer<typeof LockEventItemSchema>>()
    .with('eventType', LockingEventType.LOCKED)
    .with('executionDate', faker.date.recent())
    .with('transactionHash', faker.string.hexadecimal({ length: 64 }) as Hex)
    .with('holder', getAddress(faker.finance.ethereumAddress()))
    .with('amount', faker.finance.amount())
    .with('logIndex', faker.string.numeric());
}

export function unlockEventItemBuilder(): IBuilder<
  z.infer<typeof UnlockEventItemSchema>
> {
  return new Builder<z.infer<typeof UnlockEventItemSchema>>()
    .with('eventType', LockingEventType.UNLOCKED)
    .with('executionDate', faker.date.recent())
    .with('transactionHash', faker.string.hexadecimal({ length: 64 }) as Hex)
    .with('holder', getAddress(faker.finance.ethereumAddress()))
    .with('amount', faker.finance.amount())
    .with('unlockIndex', faker.string.numeric())
    .with('logIndex', faker.string.numeric());
}

export function withdrawEventItemBuilder(): IBuilder<
  z.infer<typeof WithdrawEventItemSchema>
> {
  return new Builder<z.infer<typeof WithdrawEventItemSchema>>()
    .with('eventType', LockingEventType.WITHDRAWN)
    .with('executionDate', faker.date.recent())
    .with('transactionHash', faker.string.hexadecimal({ length: 64 }) as Hex)
    .with('holder', getAddress(faker.finance.ethereumAddress()))
    .with('amount', faker.finance.amount())
    .with('unlockIndex', faker.string.numeric())
    .with('logIndex', faker.string.numeric());
}
