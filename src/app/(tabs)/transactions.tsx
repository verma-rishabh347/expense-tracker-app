import {
  View,
  Text,
  TextInput,
  Pressable,
  ScrollView,
} from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { SafeAreaView } from 'react-native-safe-area-context'

const transactions = [
  {
    id: 1,
    title: 'Salary',
    category: 'Income',
    date: '13 Sep 2025, 10:30 AM',
    amount: '+ ₹50,000',
    type: 'income',
    icon: 'briefcase',
    color: 'bg-green-500',
  },
  {
    id: 2,
    title: 'Lunch',
    category: 'Food',
    date: '13 Sep 2025, 1:15 PM',
    amount: '- ₹250',
    type: 'expense',
    icon: 'restaurant',
    color: 'bg-red-500',
  },
  {
    id: 3,
    title: 'Amazon',
    category: 'Shopping',
    date: '13 Sep 2025, 6:45 PM',
    amount: '- ₹1,200',
    type: 'expense',
    icon: 'cart',
    color: 'bg-blue-500',
  },
  {
    id: 4,
    title: 'Petrol',
    category: 'Transport',
    date: '12 Sep 2025, 5:20 PM',
    amount: '- ₹800',
    type: 'expense',
    icon: 'fuel',
    color: 'bg-purple-500',
  },
  {
    id: 5,
    title: 'Gaming',
    category: 'Entertainment',
    date: '12 Sep 2025, 8:10 PM',
    amount: '- ₹499',
    type: 'expense',
    icon: 'game-controller',
    color: 'bg-yellow-500',
  },
  {
    id: 6,
    title: 'Freelance Work',
    category: 'Income',
    date: '10 Sep 2025, 11:00 AM',
    amount: '+ ₹5,000',
    type: 'income',
    icon: 'laptop',
    color: 'bg-green-500',
  },
  {
    id: 7,
    title: 'Electricity Bill',
    category: 'Bills',
    date: '10 Sep 2025, 4:30 PM',
    amount: '- ₹1,500',
    type: 'expense',
    icon: 'home',
    color: 'bg-red-500',
  },
  {
    id: 8,
    title: 'Gift',
    category: 'Other',
    date: '8 Sep 2025, 2:20 PM',
    amount: '+ ₹2,000',
    type: 'income',
    icon: 'gift',
    color: 'bg-orange-500',
  },
]

const months = [
  {
    id: 1,
    title: 'This Month',
  },
  {
    id: 2,
    title: 'Last Month',
  },
  {
    id: 3,
    title: 'Last 3 Months',
  },
  {
    id: 4,
    title: 'This Year',
  },
]

export default function Transactions() {
  const [selected, setSelected] = useState('This Month')
  const [showDropdown, setShowDropdown] = useState(false)

  return (
    <View className="flex-1 bg-black">

      <SafeAreaView className="flex-1">

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 40,
          }}
        >

          {/* HEADER */}
          <View className="px-5 mt-5">

            <View className="flex-row items-start justify-between">

              {/* TITLE */}
              <View className="flex-1 pr-3">
                <Text className="text-white text-4xl font-bold">
                  Transactions
                </Text>

                <Text className="text-gray-400 text-lg mt-1">
                  Keep track of your income and expenses
                </Text>
              </View>

              {/* DROPDOWN */}
              <View className="relative">

                <Pressable
                  onPress={() => setShowDropdown(!showDropdown)}
                  className="w-40 h-14 border border-gray-800 rounded-2xl px-4 flex-row items-center justify-between"
                >

                  <Text className="text-white text-base">
                    {selected}
                  </Text>

                  <Ionicons
                    name={showDropdown ? 'chevron-up' : 'chevron-down'}
                    size={20}
                    color="white"
                  />

                </Pressable>

                {/* DROPDOWN MENU */}
                {showDropdown && (
                  <View className="absolute top-16 right-0 w-40 bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden z-50">

                    {months.map((item) => (

                      <Pressable
                        key={item.id}
                        onPress={() => {
                          setSelected(item.title)
                          setShowDropdown(false)
                        }}
                        className="px-4 py-4"
                      >

                        <Text className="text-white text-base">
                          {item.title}
                        </Text>

                      </Pressable>

                    ))}

                  </View>
                )}

              </View>

            </View>

          </View>


          {/* SEARCH */}
          <View className="mx-5 mt-7 h-16 rounded-2xl border border-gray-800 flex-row items-center px-5">

            <Ionicons
              name="search"
              size={28}
              color="#94a3b8"
            />

            <TextInput
              placeholder="Search transactions..."
              placeholderTextColor="#64748b"
              className="flex-1 text-white text-lg ml-4"
            />

          </View>


          {/* TRANSACTIONS */}
          <View className="mt-7">

            {transactions.map((item) => (

              <Pressable
                key={item.id}
                className="mx-5 mb-3 h-20 rounded-2xl border border-gray-800 flex-row items-center px-4"
              >

                {/* ICON */}
                <View
                  className={`h-14 w-14 rounded-full ${item.color} items-center justify-center`}
                >

                  <Ionicons
                    name={item.icon as any}
                    size={28}
                    color="white"
                  />

                </View>


                {/* TITLE + CATEGORY */}
                <View className="flex-1 ml-4">

                  <Text className="text-white text-lg font-bold">
                    {item.title}
                  </Text>

                  <Text className="text-gray-400 text-sm mt-1">
                    {item.category} • {item.date}
                  </Text>

                </View>


                {/* AMOUNT */}
                <View className="items-end">

                  <Text
                    className={`text-lg font-bold ${
                      item.type === 'income'
                        ? 'text-green-400'
                        : 'text-red-400'
                    }`}
                  >
                    {item.amount}
                  </Text>

                </View>


                {/* ARROW */}
                <Ionicons
                  name="chevron-forward"
                  size={22}
                  color="#64748b"
                  className="ml-2"
                />

              </Pressable>

            ))}

          </View>

        </ScrollView>

      </SafeAreaView>

    </View>
  )
}