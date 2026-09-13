import { NativeTabs } from 'expo-router/unstable-native-tabs'

export default function _layout() {
  return (
    <NativeTabs>

      <NativeTabs.Trigger name="index">
        <NativeTabs.Trigger.Label>
          Home
        </NativeTabs.Trigger.Label>

        <NativeTabs.Trigger.Icon
          sf={{ default: 'house', selected: 'house.fill' }}
        />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="reports">
        <NativeTabs.Trigger.Label>
          Reports
        </NativeTabs.Trigger.Label>

        <NativeTabs.Trigger.Icon
          sf={{ default: 'chart.bar', selected: 'chart.bar.fill' }}
        />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="transactions">
        <NativeTabs.Trigger.Label>
          Transactions
        </NativeTabs.Trigger.Label>

        <NativeTabs.Trigger.Icon
          sf={{ default: 'creditcard', selected: 'creditcard.fill' }}
        />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="profile">
        <NativeTabs.Trigger.Label>
          Profile
        </NativeTabs.Trigger.Label>

        <NativeTabs.Trigger.Icon
          sf={{ default: 'person', selected: 'person.fill' }}
        />
      </NativeTabs.Trigger>

    </NativeTabs>
  )
}